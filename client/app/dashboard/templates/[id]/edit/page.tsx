"use client";
import { useEffect, useRef } from "react";
import grapesjs from "grapesjs";
import Editor from "grapesjs";
import gjsBlockBasic from "grapesjs-blocks-basic";
import { portfolioTemplates } from "@/data/portfolioTemplates";
import "grapesjs/dist/css/grapes.min.css";

// Removed duplicate declaration of 'grapesjs' to avoid conflicts.

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
      { id: "profile", label: "Profile", category: "Sections", content: `
        <div class="profile-section">
          <img src="https://via.placeholder.com/150" class="profile-image"/>
          <h2>Your Name</h2>
          <p>Your Title</p>
        </div>` },
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
        console.log("Portfolio Saved:", portfolioData);
      }
    });

    // Add Save Button
    editor.Panels.addButton("options", [{
      id: "save-portfolio",
      className: "save-btn",
      label: "Save Portfolio",
      command: "save-portfolio",
    }]);

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
  }, []);

  return (
    <div className="editor-container">
      <div id="blocks"></div>
      <div id="editor"></div>
      <div id="styles-container"></div>
    </div>
  );
};

export default PortfolioEditor;
