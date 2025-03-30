"use client";
import { useEffect, useRef, useState } from "react";
import grapesjs from "grapesjs";
import Editor from "grapesjs";
import gjsBlockBasic from "grapesjs-blocks-basic";
import { portfolioTemplates } from "@/data/portfolioTemplates";
import "grapesjs/dist/css/grapes.min.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRouter } from "next/navigation";

const PortfolioEditor = () => {
  const router = useRouter();
  const editorRef = useRef<InstanceType<typeof Editor> | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (editorRef.current) return;

    const editor = grapesjs.init({
      container: "#editor",
      height: "100vh",
      storageManager: { type: "local", autosave: true, autoload: true },
      blockManager: { appendTo: "#blocks" },
      styleManager: { appendTo: "#styles-container" },
      plugins: [gjsBlockBasic],
      canvas: {
        styles: ["https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"],
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

    // Template Selector
    const templateSelector = document.createElement("select");
    templateSelector.innerHTML = `<option value="">Select a Template</option>` +
      portfolioTemplates.map(t => `<option value="${t.id}">${t.name}</option>`).join("");
    templateSelector.addEventListener("change", (e) => {
      const selectedId = (e.target as HTMLSelectElement).value;
      const template = portfolioTemplates.find((t) => t.id === Number(selectedId));
      if (template) editor.setComponents(template.template);
    });
    document.getElementById("blocks")?.prepend(templateSelector);

    // Add Custom Blocks
    const blocks = [
      {
        id: "profile",
        label: "Profile",
        category: "Sections",
        content: `
          <div class="profile-section">
            <h2>Your Name</h2>
            <p>Your Title</p>
          </div>` 
      },
      { id: "skills", label: "Skills", category: "Portfolio Sections", content: `
        <div class="skills-section">
          <h3>Skills</h3>
          <div class="skills-container">
            <div class="skill-item">Skill 1</div>
            <div class="skill-item">Skill 2</div>
          </div>
        </div>` },
      { id: "project", label: "Project", category: "Portfolio Sections", content: `
        <div class="project-card">
          <img src="https://via.placeholder.com/300x200" class="project-image"/>
          <h4>Project Title</h4>
          <p>Project Description</p>
          <a href="#" class="project-link">View Project</a>
        </div>` }
    ];

    blocks.forEach(block => editor.BlockManager.add(block.id, {
      label: block.label,
      category: block.category,
      content: block.content,
      attributes: { class: "fa fa-plus" },
    }));

    // Save Command
    editor.Commands.add("save-portfolio", {
      run: async () => {
        try {
          setIsSaving(true);
          const portfolioData = {
            html: editor.getHtml().replace(/"/g, "'"),
            css: editor.getCss(),
            name: "My Portfolio",
            lastUpdated: new Date().toISOString()
          };
          const response = await fetch("http://localhost:5001/api/uploads/savedPortfolio", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({"html": portfolioData.html, "css": portfolioData.css}),
          });
          const data = await response.json();
          const inlineHtml = data.inlineHtml;

          const randomValue = Date.now().toString(36) + Math.random().toString(36).substring(2, 15);
          const response2 = await fetch(`http://localhost:5001/api/create/portfolio/${randomValue}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({"html": inlineHtml}),
          });

          const data2 = await response2.json();
          if (data2.success) {
            router.push(`http://localhost:5001${data2.url}`);
          } else {
            alert("Error saving portfolio.");
          }
        } catch (error) {
          alert("Error saving portfolio.");
        } finally {
          setIsSaving(false);
        }
      }
    });

    // Update Download PDF Command
    editor.Commands.add("download-pdf", {
      run: async (editor) => {
        const content = editor.getWrapper().innerHTML;
        const container = document.createElement("div");

        // Inject CSS and HTML to container
        container.innerHTML = `
          <style>
            ${editor.getCss().replace(/oklch\([^\)]+\)/g, "rgb(0, 0, 0)")}
          </style>
          ${content}
        `;
        document.body.appendChild(container);

        // Convert HTML to canvas
        const canvas = await html2canvas(container, {
          scale: 2,
          useCORS: true,
        });

        const imgData = canvas.toDataURL("image/jpeg", 1.0);
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4",
        });

        // Add the image to PDF
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 297; // A4 height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft > 0) {
          position -= pageHeight;
          pdf.addPage();
          pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save("portfolio.pdf");
        document.body.removeChild(container);
      },
    });

    // Add both Save and Download buttons
    editor.Panels.addButton("options", [
      {
        id: "save-portfolio",
        className: "save-btn",
        label: "Save Portfolio",
        command: "save-portfolio",
      },
      {
        id: "download-pdf",
        className: "download-btn",
        label: "Download PDF",
        command: "download-pdf",
      }
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
      .download-btn { 
        background: #3B82F6; 
        color: white; 
        padding: 8px 16px; 
        border-radius: 6px; 
        margin-left: 8px;
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      @keyframes colorChange {
        0% { border-top-color: #FF6B6B; }
        25% { border-top-color: #4ECDC4; }
        50% { border-top-color: #45B7D1; }
        75% { border-top-color: #96CEB4; }
        100% { border-top-color: #FF6B6B; }
      }
      
      .loading-spinner {
        width: 60px;
        height: 60px;
        border: 6px solid rgba(255, 255, 255, 0.3);
        border-top: 6px solid #FF6B6B;
        border-radius: 50%;
        animation: spin 1s linear infinite, colorChange 3s linear infinite;
        margin: 0 auto;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
      }
    `);
  }, [router]);

  return (
    <>
      <div style={{
        display: 'flex',
        height: '100vh',
        overflow: 'hidden'
      }}>
        <div id="blocks" style={{
          width: '250px',
          background: '#f5f5f5',
          padding: '10px',
          overflowY: 'auto'
        }}></div>
        <div id="editor" style={{
          flexGrow: 1,
          height: '100vh',
          background: 'white'
        }}></div>
        <div id="styles-container" style={{
          width: '250px',
          background: '#f5f5f5',
          padding: '10px',
          overflowY: 'auto'
        }}></div>
      </div>
      {isSaving && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(67, 67, 67, 0.85)',
          backdropFilter: 'blur(5px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999
        }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '30px',
            borderRadius: '15px',
            textAlign: 'center',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            backdropFilter: 'blur(8px)',
          }}>
            <div className="loading-spinner"></div>
            <p style={{ 
              marginTop: '15px',
              color: 'white',
              fontSize: '1.1rem',
              fontWeight: '500'
            }}>Saving portfolio...</p>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioEditor;