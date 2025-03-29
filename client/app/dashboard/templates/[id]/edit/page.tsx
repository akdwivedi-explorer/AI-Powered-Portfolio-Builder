"use client";
import { useEffect, useRef } from "react";
import { useSearchParams, useParams } from "next/navigation";
import grapesjs from "grapesjs";
import gjsBlockBasic from "grapesjs-blocks-basic";
import { portfolioTemplates } from "@/data/portfolioTemplates";
import "grapesjs/dist/css/grapes.min.css";

const PortfolioEditor = () => {
  const editorRef = useRef<grapesjs.Editor | null>(null);
  const searchParams = useSearchParams();
  const external = searchParams.get("external") === "true";
  const { id: portfolioID } = useParams(); // Get portfolioID from the route

  const templateData = searchParams.get("template");

  useEffect(() => {
    if (editorRef.current) return;

    const editor = grapesjs.init({
      container: "#editor",
      height: "100%",
      width: "100%",
      storageManager: { type: "local", autosave: true, autoload: true },
      blockManager: { appendTo: "#blocks" },
      styleManager: { appendTo: "#styles-container" },
      plugins: [gjsBlockBasic],
      canvas: {
        styles: [
          // Ensure this URL is correct and accessible
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",
        ],
      },
      deviceManager: {
        devices: [
          { name: "Desktop", width: "" },
          { name: "Tablet", width: "768px", widthMedia: "768px" },
          { name: "Mobile", width: "320px", widthMedia: "480px" },
        ],
      },
    });

    editorRef.current = editor;

    // If external is true, fetch the template data
    if (external) {
      console.log(external, portfolioID);
      const fetchTemplateData = async () => {
        try {
          const response = await fetch(
            `http://localhost:5001/api/uploads/getHtmlandCss/${portfolioID}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (!response.ok) {
            throw new Error("Failed to fetch template data");
          }

          const templateData = await response.json();
          editor.setComponents(templateData.html);
          editor.setStyle(templateData.css);
        } catch (error) {
          console.error("Error fetching template data:", error);
        }
      };

      fetchTemplateData();
    }

    // Load template data if provided
    if (templateData) {
      try {
        const decodedTemplate = decodeURIComponent(templateData);
        const parsedTemplate = JSON.parse(decodedTemplate);
        if (parsedTemplate.html && parsedTemplate.css) {
          editor.setComponents(parsedTemplate.html);
          editor.setStyle(parsedTemplate.css);
        } else {
          console.error("Invalid template data structure:", parsedTemplate);
        }
      } catch (error) {
        console.error("Failed to parse template data:", error);
      }
    }

    // Template Selector
    const templateSelector = document.createElement("select");
    templateSelector.className = "template-selector"; // Apply styles
    templateSelector.innerHTML =
      `<option value="">Select a Template</option>` +
      portfolioTemplates
        .map((t) => `<option value="${t.id}">${t.name}</option>`)
        .join("");

    templateSelector.addEventListener("change", (e) => {
      const selectedId = (e.target as HTMLSelectElement).value;
      const template = portfolioTemplates.find(
        (t) => t.id === Number(selectedId)
      );
      if (template) editor.setComponents(template.template);
    });

    document.getElementById("blocks")?.prepend(templateSelector);

    // Save Command
    editor.Commands.add("save-portfolio", {
      run: async () => {
        const portfolioData = {
          html: editor.getHtml(),
          css: editor.getCss(),
          name: "My Portfolio",
          lastUpdated: new Date().toISOString(),
        };
        console.log("Portfolio Saved:", portfolioData);
      },
    });

    // Add Save Button
    editor.Panels.addButton("options", [
      {
        id: "save-portfolio",
        className: "save-btn",
        label: "Save Portfolio",
        command: "save-portfolio",
      },
    ]);

    // Editor Styles
    editor.setStyle(`
      .profile-section, .skills-section, .project-card { padding: 2rem; }
      .profile-image { border-radius: 50%; width: 150px; }
      .skills-container { display: flex; gap: 1rem; }
      .skill-item { background: #f0f0f0; padding: 0.5rem; border-radius: 8px; }
      .project-card { border: 1px solid #ddd; border-radius: 8px; overflow: hidden; }
      .project-image { width: 100%; height: 200px; object-fit: cover; }
      .project-link { display: inline-block; margin: 1rem; padding: 0.5rem 1rem; }
      .save-btn { background: #10B981; color: white; padding: 8px 16px; border-radius: 6px; }
    `);
  }, [external, portfolioID]);

  return (
    <div className="editor-wrapper">
      <div id="blocks"></div>
      <div id="editor"></div>
      <div id="styles-container"></div>
      <style jsx>{`
        .editor-wrapper {
          position: absolute;
          top: 0;
          left: 250px; /* Assuming your sidebar width is 250px */
          width: calc(100vw - 250px);
          height: 100vh;
          display: flex;
          overflow: hidden;
          background: #f8f8f8;
        }
        #blocks,
        #styles-container {
          width: 250px;
          background: #f5f5f5;
          padding: 10px;
          overflow-y: auto;
        }
        #editor {
          flex-grow: 1;
          height: 100vh;
          background: white;
        }
        /* Style for Template Selector */
        .template-selector {
          width: 100%;
          padding: 8px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 4px;
          background: white;
          color: black; /* Ensure text is black */
          margin-bottom: 10px;
        }
        .template-selector option {
          color: black;
          background: #010101 /* Ensure dropdown options are visible */
        }
      `}</style>
    </div>
  );
};

export default PortfolioEditor;
