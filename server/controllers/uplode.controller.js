import { GoogleGenerativeAI } from "@google/generative-ai";
import PortfolioTemplate from "../models/portfolio.model.js";
import pdf from "pdf-parse";
import dotenv from "dotenv";
import fs from "fs";
import fetch from "node-fetch";
import jwt from "jsonwebtoken"; // Import JWT for token validation

dotenv.config();

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const SECRET_KEY = process.env.JWT_SECRET; // Ensure you set JWT_SECRET in .env

// ✅ Middleware: Verify Token Before Processing Request

// ✅ Resume Parsing and Processing Route (Protected)
export const getResumeDescription = async (req, res) => {
  try {
    console.log("Received file:", req.file);

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const filePath = req.file.path;

    if (!fs.existsSync(filePath)) {
      return res.status(400).json({ error: "Uploaded file not found" });
    }
    const pdfBuffer = fs.readFileSync(filePath);
    const pdfData = await pdf(pdfBuffer);

    console.log("Extracted Resume Text:", pdfData.text);

    // Send extracted text to Gemini API with specific instructions
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const prompt = `
      Extract key details from this resume and return them in a structured JSON format.
      Include the following fields: name, email, phone, skills (as an array), 
      experience (as an array), project (as an array) and education (as an array).
      
      For skills, include both the skill name and proficiency level.
      For experience and education, include organization, position/degree, time period, and description.
      
      Here's the resume text:
      ${pdfData.text}

      Return ONLY the JSON object, without any additional text or markdown formatting.
    `;

    const response = await model.generateContent(prompt);
    const resultText = response.response.candidates[0].content.parts[0].text;

    // Parse the JSON response (Gemini might return it as a string)
    let extractedData;
    try {
      extractedData = JSON.parse(resultText);
    } catch (e) {
      // If parsing fails, try to clean the string and parse again
      const cleanJsonString = resultText.replace(/```json|```/g, "").trim();
      extractedData = JSON.parse(cleanJsonString);
    }

    // console.log("Gemini API Response:", extractedData);

    // Cleanup: Delete the file after processing
    fs.unlinkSync(filePath);

    // Return extracted resume details in JSON format
    res.json({
      status: "success",
      extractedData: extractedData,
    });
  } catch (error) {
    console.error("Error processing resume:", error);

    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }

    res.status(500).json({ error: "Failed to process resume" });
  }
};

// ✅ Extract Description from Text (Protected)
export const getDescription = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "No text provided" });
    }
    if (!text) {
      return res.status(400).json({ error: "No text provided" });
    }

    console.log("Received Resume Text:", text);
    console.log("Received Resume Text:", text);

    // Ensure correct model name
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
        Extract structured details from the following resume text and return a **pure JSON** response:
        - Name
        - Contact Information (email, phone)
        - Skills
        - Work Experience (Company, Role, Duration)
        - Education (Degree, Institution, Year)
        - Achievements
        - Summary

        Resume Text:
        ${text}

        **Return only a JSON object with no explanations or markdown.**
        `;

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    console.log("Gemini API Response:", result);
    // console.log("Gemini API Response:", result);

    if (!result.response || !result.response.candidates) {
      throw new Error("Invalid response from Gemini API");
    }
    // if (!result.response || !result.response.candidates) {
    //   throw new Error("Invalid response from Gemini API");
    // }

    let aiResponse = result.response.candidates[0].content.parts[0].text.trim();

    // Remove markdown if present
    aiResponse = aiResponse
      .replace(/^```json/, "")
      .replace(/```$/, "")
      .trim();

    // Convert response to JSON
    const structuredData = JSON.parse(aiResponse);

    res.json({ status: "success", data: structuredData });
  } catch (error) {
    console.error("Error processing text:", error);
    res.status(500).json({ error: error.message || "Failed to process text" });
  }
};

export const generatePortfolioFromJson = async (req, res) => {
  try {
    const { status, extractedData } = req.body;

    if (status !== "success" || !extractedData) {
      return res.status(400).json({
        success: false,
        error: "Invalid data format",
      });
    }

    // AI Prompt for Portfolio Generation
    const generationPrompt = `
    Generate an ultra-modern animated portfolio with dynamic content following STRICT requirements:
    
    1. JSON STRUCTURE (return ONLY this):
    {
      "html": "<body>...</body>",
      "css": ""
    }
    
    2. HTML REQUIREMENTS:
       - Must include: Hero, Skills, Projects, Experience, Education, Contact
       - All images must use LIVE placeholders from these sources:
         * Profile: https://randomuser.me/api/portraits/men/3.jpg
         * Projects: https://picsum.photos/800/600?random=8
         * Logos: https://logo.clearbit.com/[company].com
       - Must include CSS animations (inline styles only):
         * Fade-in effects on scroll
         * Hover transformations (scale, shadow)
         * Smooth transitions (all interactive elements)
       - Must use modern UI patterns:
         * Glassmorphism cards (backdrop-filter)
         * Gradient accents
         * Dynamic project grids
    
    3. ANIMATION REQUIREMENTS:
       - Hero section: Typewriter effect for headline
       - Skills: Animated progress bars
       - Projects: 3D card flips on hover
       - Navigation: Smooth scroll behavior
    
    4. TECHNICAL REQUIREMENTS:
       - Pure inline CSS (no external resources)
       - Mobile-first responsive design
       - Semantic HTML5 with ARIA labels
       - All images must include:
         * width/height attributes
         * loading="lazy"
         * alt text
    
    5. VISUAL ENHANCEMENTS:
       - Dark/light mode toggle (inline JS)
       - Micro-interactions on all buttons
       - Animated gradients
       - Particle effects background (CSS only)
    
    6. DATA INTEGRATION:
       - Dynamically insert ${JSON.stringify(extractedData)} values:
         * Skills → Animated charts
         * Experience → Interactive timeline
         * Projects → Filterable gallery
    
    Example structure:
    <body>
      <!-- Animated hero with typed.js effect -->
      <!-- Glassmorphism skill cards -->
      <!-- 3D animated project gallery -->
      <!-- Dynamic experience timeline -->
      <!-- Education with institution logos -->
      <!-- Contact form with validation -->
    </body>
    
    IMPORTANT: Return ONLY valid JSON with no additional text or markdown.
    `;

    // Generate response from Gemini AI
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(generationPrompt);

    // Debugging: Log raw response
    const responseText =
      result.response.candidates?.[0]?.content?.parts?.[0]?.text;
    console.log("Raw AI Response:", responseText);

    if (!responseText) {
      throw new Error("AI did not return a valid response.");
    }

    let extractedJson;

    try {
      // Extract only JSON part using regex
      const jsonMatch = responseText.match(/{[\s\S]*}/);
      if (!jsonMatch) {
        throw new Error("Failed to locate JSON object in AI response.");
      }

      extractedJson = JSON.parse(jsonMatch[0]);

      if (!extractedJson.html || typeof extractedJson.html !== "string") {
        throw new Error("Missing or invalid 'html' field in AI response.");
      }

      if (!("css" in extractedJson)) {
        extractedJson.css = ""; // Ensure CSS field is present and empty
      }
    } catch (error) {
      console.error("Failed to parse AI JSON response:", error);
      throw new Error("Failed to parse AI JSON response");
    }

    // Validate HTML structure (Fix AI issues)
    if (!extractedJson.html.includes("<body>")) {
      console.warn("AI did not generate <body> tag. Wrapping manually.");
      extractedJson.html = `<body>${extractedJson.html}</body>`;
    }

    if (
      !extractedJson.html.startsWith("<body>") ||
      !extractedJson.html.endsWith("</body>")
    ) {
      throw new Error("Generated HTML does not contain a valid <body> tag.");
    }

    // Save to database
    const portfolio = new PortfolioTemplate({
      userId: req.user?._id,
      resumeData: extractedData,
      html: extractedJson.html, // This now contains inline styles
      css: "", // Store an empty string in MongoDB
      createdAt: new Date(),
    });

    await portfolio.save();

    res.status(201).json({
      success: true,
      portfolioId: portfolio._id,
      html: portfolio.html,
      css: portfolio.css,
    });
  } catch (error) {
    console.error("Generation error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to generate portfolio",
      details:
        process.env.NODE_ENV === "development"
          ? {
              message: error.message,
              stack: error.stack,
            }
          : undefined,
    });
  }
};

export const getPortfolio = async (req, res) => {
  try {
    const portfolioId = req.params.id;

    if (!portfolioId) {
      return res.status(400).json({ error: "Portfolio ID is required" });
    }

    const portfolio = await PortfolioTemplate.findById(portfolioId);

    if (!portfolio) {
      return res.status(404).json({ error: "Portfolio not found" });
    }

    res.setHeader("Content-Type", "text/html"); // Set content type for frontend
    res.send(portfolio.html); // Send raw HTML
  } catch (error) {
    console.error("Error fetching portfolio:", error);
    res.status(500).json({ error: "Failed to fetch portfolio" });
  }
};

export const getGitHubUser = async (req, res) => {
  try {
    const { username } = req.body;

    if (!username) {
      return res.status(400).json({ error: "GitHub username is required" });
    }

    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: "GitHub user not found" });
    }

    const userData = await response.json();

    res.json({
      status: "success",
      extractedData: {
        login: userData.login,
        name: userData.name,
        avatar_url: userData.avatar_url,
        bio: userData.bio,
        blog: userData.blog,
        company: userData.company,
        location: userData.location,
        public_repos: userData.public_repos,
        followers: userData.followers,
        following: userData.following,
        created_at: userData.created_at,
        html_url: userData.html_url,
      },
    });
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    res.status(500).json({ error: "Failed to fetch GitHub user details" });
  }
};

export const convertToInlineCss = async (req, res) => {
  try {
    const { html, css } = req.body;

    if (!html || !css) {
      return res.status(400).json({ error: "HTML and CSS are required" });
    }

    // AI prompt for converting CSS into inline styles
    const prompt = `
      Convert the following HTML and CSS into an HTML file with **ONLY inline CSS**. 
      Ensure all styles are properly applied within the HTML elements using the "style" attribute.

      STRICT REQUIREMENTS:
      1. Return ONLY a JSON object with this exact structure:
         {
           "html": "<body>...</body>"
         }
      2. The "html" field must:
         - Contain only the <body> content (NO <head>, <meta>, or <style> tags)
         - Use inline styles properly formatted without escaped characters
         - Ensure mobile responsiveness with inline styles (use flexbox/grid where needed)
      3. DO NOT include any additional text, explanations, or markdown.

      HTML:
      ${html}

      CSS:
      ${css}
    `;

    // Send request to Gemini AI
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(prompt);

    // Extract AI response
    const responseText =
      result.response.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!responseText) {
      throw new Error("Invalid AI response.");
    }

    // Extract JSON response
    const jsonMatch = responseText.match(/{[\s\S]*}/);
    if (!jsonMatch) {
      throw new Error("Failed to parse JSON response.");
    }

    const extractedJson = JSON.parse(jsonMatch[0]);

    if (!extractedJson.html) {
      throw new Error("AI response missing 'html' field.");
    }

    // Return the transformed inline-style HTML
    res.json({
      success: true,
      inlineHtml: extractedJson.html,
    });
  } catch (error) {
    console.error("Error converting to inline CSS:", error);
    res.status(500).json({ error: "Failed to convert CSS to inline styles" });
  }
};
