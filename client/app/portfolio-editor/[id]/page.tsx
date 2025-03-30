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
      dragMode: "absolute", // Enable absolute positioning while dragging
      canvasDragMode: "translate", // Enable free dragging in canvas
      resizeManager: {
        tl: true, // Top left
        tc: true, // Top center
        tr: true, // Top right
        cl: true, // Center left
        cr: true, // Center right
        bl: true, // Bottom left
        bc: true, // Bottom center
        br: true, // Bottom right
      },
      gridManager: {
        appendTo: ".gjs-cv-canvas",
        snapToGrid: 10, // Snap to grid while dragging
        gridSize: 10, // Grid size in pixels
      },
      selectorManager: {
        componentFirst: true,
      },
      components: {
        dmode: "absolute", // Set default positioning mode
        dragMode: "absolute",
        removable: true,
        draggable: true,
        droppable: true,
        hoverable: true,
        selectable: true,
      },
      blockManager: {
        appendTo: "#blocks",
        blocks: [
          {
            id: "section",
            label: "<b>Section</b>",
            category: "Basic",
            content:
              '<section class="section"><div class="container"></div></section>',
            attributes: { class: "fa fa-square-o" },
          },
          {
            id: "text",
            label: "Text",
            category: "Basic",
            content: '<div data-gjs-type="text">Insert your text here</div>',
            attributes: { class: "fa fa-text-width" },
          },
        ],
      },
      styleManager: {
        appendTo: "#styles-container",
        sectors: [
          {
            name: "Dimension",
            open: false,
            properties: [
              "width",
              "height",
              "min-width",
              "min-height",
              "margin",
              "padding",
            ],
          },
          {
            name: "Typography",
            open: false,
            properties: [
              "font-family",
              "font-size",
              "font-weight",
              "letter-spacing",
              "color",
              "line-height",
              "text-align",
              "text-decoration",
              "text-shadow",
            ],
          },
          {
            name: "Decorations",
            open: false,
            properties: [
              "background-color",
              "border",
              "border-radius",
              "box-shadow",
            ],
          },
          {
            name: "Extra",
            open: false,
            properties: ["opacity", "transition", "transform"],
          },
        ],
      },
      layerManager: {
        appendTo: "#layers",
      },
      panels: {},
      plugins: [gjsBlockBasic],
      canvas: {
        styles: [
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

    // Template Selector
    const templateSelector = document.createElement("select");
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
          </div>`,
      },
      {
        id: "skills",
        label: "Skills",
        category: "Portfolio Sections",
        content: `
        <div class="skills-section">
          <h3>Skills</h3>
          <div class="skills-container">
            <div class="skill-item">Skill 1</div>
            <div class="skill-item">Skill 2</div>
          </div>
        </div>`,
      },
      {
        id: "project",
        label: "Project",
        category: "Portfolio Sections",
        content: `
        <div class="project-card">
          <img src="https://via.placeholder.com/300x200" class="project-image"/>
          <h4>Project Title</h4>
          <p>Project Description</p>
          <a href="#" class="project-link">View Project</a>
        </div>`,
      },
    ];

    blocks.forEach((block) =>
      editor.BlockManager.add(block.id, {
        label: block.label,
        category: block.category,
        content: block.content,
        attributes: { class: "fa fa-plus" },
        draggable: true,
        droppable: true,
        copyable: true,
        selectable: true,
        hoverable: true,
        styleClass: "fa fa-plus gjs-block-draggable",
      })
    );

    // Save Command
    editor.Commands.add("save-portfolio", {
      run: async () => {
        const portfolioData = {
          html: editor.getHtml(),
          css: editor.getCss(),
          name: "My Portfolio",
          lastUpdated: new Date().toISOString(),
        };
        console.log("Portfolio Saved:", portfolioData.css);
        console.log("Portfolio Saved:", portfolioData.html);
      },
    });

    const parseStyles = (css) => {
      console.log("Parsing CSS:", css);
      const styleEl = document.createElement("style");
      styleEl.innerHTML = css;
      document.head.appendChild(styleEl);

      const sheets = document.styleSheets;
      for (let i = 0; i < sheets.length; i++) {
        const rules = sheets[i].cssRules || [];
        for (let j = 0; j < rules.length; j++) {
          if (rules[j].style) {
            if (
              rules[j].style.color &&
              rules[j].style.color.includes("oklch")
            ) {
              rules[j].style.color = "rgb(0, 0, 0)";
            }
          }
        }
      }
      document.head.removeChild(styleEl);
    };

    // Update Download PDF Command
    editor.Commands.add("download-pdf", {
      run: async (editor) => {
        const content = editor.getWrapper().innerHTML;
        const css = editor.getCss();

        // Parse and clean up the CSS before rendering
        parseStyles(css);

        // Create a container for rendering content
        const container = document.createElement("div");
        container.innerHTML = `
          <style>${css.replace(/oklch\([^\)]+\)/g, "rgb(0, 0, 0)")}</style>
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

        // Add the image to the PDF
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

        // Save the PDF
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
      },
    ]);

    // Add custom category for portfolio blocks
    editor.BlockManager.add("portfolio-blocks", {
      category: "Portfolio",
      label: "Portfolio Blocks",
      attributes: { class: "fa fa-th-large" },
      content: { type: "portfolio-blocks" },
    });

    // Add keyboard shortcuts
    editor.Commands.add("undo", {
      run: (editor) => editor.UndoManager.undo(),
      shortcuts: { keys: "ctrl+z" },
    });

    editor.Commands.add("redo", {
      run: (editor) => editor.UndoManager.redo(),
      shortcuts: { keys: "ctrl+shift+z" },
    });

    // Add drag helpers
    editor.on("component:selected", (component) => {
      if (!component.get("draggable")) return;

      const el = component.getEl();
      if (el) {
        el.style.cursor = "move";
        el.style.outline = "2px solid #4a9eff";
      }
    });

    editor.on("component:deselected", (component) => {
      const el = component.getEl();
      if (el) {
        el.style.cursor = "";
        el.style.outline = "";
      }
    });

    // Enable drag indicators
    editor.on("component:drag:start", () => {
      editor.refresh();
      const body = editor.Canvas.getBody();
      body.style.cursor = "move";
    });

    editor.on("component:drag:end", () => {
      const body = editor.Canvas.getBody();
      body.style.cursor = "default";
    });

    // Add position controls to style manager
    editor.StyleManager.addSector("position", {
      name: "Position",
      open: false,
      properties: [
        {
          name: "Position",
          property: "position",
          type: "select",
          defaults: "static",
          options: [
            { value: "static", name: "Static" },
            { value: "relative", name: "Relative" },
            { value: "absolute", name: "Absolute" },
            { value: "fixed", name: "Fixed" },
          ],
        },
        { property: "top", type: "number", units: ["px", "%"] },
        { property: "right", type: "number", units: ["px", "%"] },
        { property: "bottom", type: "number", units: ["px", "%"] },
        { property: "left", type: "number", units: ["px", "%"] },
        { property: "z-index", type: "number" },
      ],
    });

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
      .gjs-selected {
        outline: 2px solid #4a9eff !important;
      }
      .gjs-block-draggable {
        cursor: move;
      }
      .gjs-block:hover {
        box-shadow: 0 0 5px rgba(0,0,0,0.2);
      }
      .gjs-toolbar {
        background-color: #444;
        border-radius: 3px;
      }
      .gjs-resizer-h {
        border: 2px solid #4a9eff;
      }
      .gjs-resizer-v {
        border: 2px solid #4a9eff;
      }
      .gjs-com-badge,
      .gjs-com-badge-red,
      .gjs-com-badge-green {
        color: #fff;
        padding: 2px 5px;
        border-radius: 3px;
        font-size: 11px;
      }
      .gjs-com-badge-red { background-color: #ff3b30; }
      .gjs-com-badge-green { background-color: #4cd964; }
    `);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div
        id="devices"
        style={{
          padding: "10px",
          background: "#4a4a4a",
          color: "white",
          display: "flex",
          gap: "10px",
        }}
      ></div>
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <div
          style={{
            width: "250px",
            display: "flex",
            flexDirection: "column",
            background: "#f5f5f5",
            borderRight: "1px solid #ddd",
          }}
        >
          <div
            id="blocks"
            style={{ flex: 1, overflowY: "auto", padding: "10px" }}
          ></div>
          <div
            id="layers"
            style={{ height: "250px", borderTop: "1px solid #ddd" }}
          ></div>
        </div>
        <div id="editor" style={{ flex: 1 }}></div>
        <div
          id="styles-container"
          style={{
            width: "250px",
            background: "#f5f5f5",
            overflowY: "auto",
            borderLeft: "1px solid #ddd",
            padding: "10px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default PortfolioEditor;