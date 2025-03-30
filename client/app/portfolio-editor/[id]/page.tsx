"use client";
import { useEffect, useRef } from "react";
import grapesjs from "grapesjs";
import Editor from "grapesjs";
import gjsBlockBasic from "grapesjs-blocks-basic";
import { portfolioTemplates } from "@/data/portfolioTemplates";
import "grapesjs/dist/css/grapes.min.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";


const PortfolioEditor = () => {
  const editorRef = useRef<InstanceType<typeof Editor> | null>(null);

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
      const template = portfolioTemplates.find(t => t.id === Number(selectedId));
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
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" class="profile-image"/>
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
        const portfolioData = {
          html: editor.getHtml(),
          css: editor.getCss(),
          name: "My Portfolio",
          lastUpdated: new Date().toISOString()
        };
        console.log("Portfolio Saved:", portfolioData.css);
        console.log("Portfolio Saved:", portfolioData.html);
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
    `);
  }, []);

  return (
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
  );
};

export default PortfolioEditor;