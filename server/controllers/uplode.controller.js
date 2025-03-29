import { GoogleGenerativeAI } from "@google/generative-ai";
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
      experience (as an array), and education (as an array).
      
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
      const cleanJsonString = resultText.replace(/```json|```/g, '').trim();
      extractedData = JSON.parse(cleanJsonString);
    }

    console.log("Gemini API Response:", extractedData);

    // Cleanup: Delete the file after processing
    fs.unlinkSync(filePath);

    // Return extracted resume details in JSON format
    res.json({ 
      status: "success", 
      extractedData: extractedData 
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
        aiResponse = aiResponse.replace(/^```json/, "").replace(/```$/, "").trim();

        // Convert response to JSON
        const structuredData = JSON.parse(aiResponse);

        res.json({ status: "success", data: structuredData });
    } catch (error) {
        console.error("Error processing text:", error);
        res.status(500).json({ error: error.message || "Failed to process text" });
    }
};



export const getLinkedinDescription = (req, res) => {
  res.json({ message: "LinkedIn description extraction not implemented yet." });
};
