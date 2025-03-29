import { GoogleGenerativeAI } from "@google/generative-ai";
import PortfolioTemplate from "../models/portfolio.model.js";
import pdf from "pdf-parse";
import fs from "fs";

// Initialize Gemini API
const genAI = new GoogleGenerativeAI("AIzaSyAJL8yFm--dpxkYYNsQwJISy8sS53_xAbs");

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

    // Read PDF file and extract text
    const pdfBuffer = fs.readFileSync(filePath);
    const pdfData = await pdf(pdfBuffer);

    console.log("Extracted Resume Text:", pdfData.text);

    // Send extracted text to Gemini API with more specific instructions
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

    console.log("Gemini API Response:", extractedData);

    // Cleanup: Delete the file after processing
    fs.unlinkSync(filePath);

    // Return extracted resume details in JSON format
    res.json({
      status: "success",
      extractedData: extractedData,
    });
  } catch (error) {
    console.error("Error processing resume:", error);
    // Clean up file if something went wrong
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({ error: "Failed to process resume" });
  }
};

export const getDescription = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "No text provided" });
    }

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

    if (!result.response || !result.response.candidates) {
      throw new Error("Invalid response from Gemini API");
    }

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
    Generate a professional, stylish, and modern-designed portfolio with enhanced UI/UX.

    STRICT REQUIREMENTS:
    1. Return ONLY a JSON object with this exact structure:
       {
         "html": "<body>...</body>",
         "css": ""
       }
    2. The "html" field must:
       - Contain ONLY the <body> content (NO <head>, <meta>, or <style> tags)
       - Be properly formatted without escaped characters
       - Include sections for skills, experience, and education
       - Use **inline styles only** for layout and design
       - Ensure proper mobile responsiveness with inline styles (use flexbox/grid where necessary)
    3. The "css" field must be an **empty string ("")**.
    
    IMPORTANT: DO NOT include any additional text, markdown, or explanations. ONLY return the JSON object.

    RESUME DATA:
    ${JSON.stringify(extractedData, null, 2)}
    `;

    // Generate response from Gemini AI
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(generationPrompt);

    // Debugging: Log raw response
    const responseText = result.response.candidates?.[0]?.content?.parts?.[0]?.text;
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

    if (!extractedJson.html.startsWith("<body>") || !extractedJson.html.endsWith("</body>")) {
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
      details: process.env.NODE_ENV === "development" ? {
        message: error.message,
        stack: error.stack,
      } : undefined,
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
