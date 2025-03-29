import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const createPortfolio = async (req, res) => {
  try {
    const { portfolioId } = req.params; // Get portfolioId from URL params
    const  {html}  = req.body; // Get HTML content from request body

    if (!html) {
      return res.status(400).json({ error: "Missing HTML content" });
    }

    // Define the file path
    const portfolioDir = path.join(__dirname, "../public/portfolios");
    const portfolioPath = path.join(portfolioDir, `${portfolioId}.html`);

    // Ensure the directories exist
    if (!fs.existsSync(portfolioDir)) {
      fs.mkdirSync(portfolioDir, { recursive: true });
    }

    // Wrap the HTML content inside a complete HTML structure
    const fullHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio</title>
      </head>
      ${html}
      </html>
    `;

    // Write the HTML file
    fs.writeFileSync(portfolioPath, fullHtml);

    // Return success response with portfolio URL
    res.status(201).json({
      success: true,
      url: `/portfolios/${portfolioId}`,
    });

  } catch (error) {
    console.error("Error creating portfolio:", error);
    res.status(500).json({ error: "Failed to create portfolio" });
  }
};
