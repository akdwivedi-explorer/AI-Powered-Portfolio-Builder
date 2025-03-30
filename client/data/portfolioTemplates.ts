export const portfolioTemplates = [
    {
      "id": 0,
      name: "Template 1",
      template: `<div style="position: relative; width: 100%; height: 0; padding-top: 56.2225%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https://www.canva.com/design/DAGjJQMEYFI/5uhVgVTX3cf8NfKBqRN-_w/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>`
    },
    {
      id: 1,
      name: 'Template 2',
      template: `
      <div class="portfolio-container" style="width: 100%; max-width: 1200px; margin: 0 auto; padding: 2rem; position: relative; background: #f8fafc;">
  <!-- Hero Section -->
  <header class="hero-section" style="width: 100%; position: relative; background: linear-gradient(135deg, #6D28D9, #3B82F6); color: white; padding: 6rem 2rem; border-radius: 20px; text-align: center; margin-bottom: 3rem; box-sizing: border-box; overflow: hidden;">
    <div class="profile-box" style="position: relative; width: 100%; max-width: 600px; margin: 0 auto;">
      <img src="https://via.placeholder.com/150?format=webp" class="profile-image" style="width: 150px; height: 150px; border-radius: 50%; border: 6px solid rgba(255, 255, 255, 0.5); margin-bottom: 1.5rem; box-shadow: 0 4px 20px rgba(0,0,0,0.1);"/>
      <h1 style="font-size: 3rem; margin-bottom: 1rem; font-weight: 700; text-shadow: 0 2px 10px rgba(0,0,0,0.2);">Creative Designer</h1>
      <p class="tagline" style="font-size: 1.3rem; opacity: 0.9; letter-spacing: 0.5px;">UI/UX Designer | Web Developer | Illustrator</p>
    </div>
  </header>

  <!-- About Section with Glassmorphism -->
  <section class="about-section" style="width: 100%; position: relative; background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(15px); padding: 3rem; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); margin-bottom: 3rem; box-sizing: border-box; text-align: center;">
    <h2 style="font-size: 2rem; margin-bottom: 1.5rem; color: #1e293b;">About Me</h2>
    <p style="font-size: 1.2rem; line-height: 1.6; color: #64748b;">I’m a passionate designer focused on crafting beautiful, intuitive, and user-centric digital experiences. My expertise lies in creating modern and minimalistic web interfaces.</p>
  </section>

  <!-- Tech Stack with Neon Glow -->
  <section class="tech-stack" style="width: 100%; position: relative; background: linear-gradient(135deg, #0F172A, #1E293B); padding: 3rem; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); margin-bottom: 3rem; box-sizing: border-box;">
    <h2 style="font-size: 2rem; margin-bottom: 2rem; color: #FACC15; text-align: center; text-shadow: 0 0 10px #FACC15;">Tech Stack</h2>
    <div class="skills-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1rem;">
      <div class="skill-item" style="background: rgba(255, 255, 255, 0.1); padding: 1rem; border-radius: 12px; text-align: center; font-weight: 500; color: #FACC15; border: 1px solid rgba(255, 255, 255, 0.2); box-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);">JavaScript</div>
      <div class="skill-item" style="background: rgba(255, 255, 255, 0.1); padding: 1rem; border-radius: 12px; text-align: center; font-weight: 500; color: #FACC15; border: 1px solid rgba(255, 255, 255, 0.2); box-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);">React</div>
      <div class="skill-item" style="background: rgba(255, 255, 255, 0.1); padding: 1rem; border-radius: 12px; text-align: center; font-weight: 500; color: #FACC15; border: 1px solid rgba(255, 255, 255, 0.2); box-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);">Figma</div>
      <div class="skill-item" style="background: rgba(255, 255, 255, 0.1); padding: 1rem; border-radius: 12px; text-align: center; font-weight: 500; color: #FACC15; border: 1px solid rgba(255, 255, 255, 0.2); box-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);">Node.js</div>
    </div>
  </section>

  <!-- Projects Section with Hover Effect -->
  <section class="projects-grid" style="width: 100%; position: relative; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; box-sizing: border-box;">
    <div class="project-card" style="background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <img src="https://via.placeholder.com/600x400?format=webp" style="width: 100%; height: 200px; object-fit: cover;"/>
      <div class="project-info" style="padding: 1.5rem;">
        <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: #1e293b;">Project Name</h3>
        <p style="color: #64748b; margin-bottom: 1rem;">An innovative project that solves real-world problems.</p>
        <div class="project-links" style="display: flex; gap: 1rem;">
          <a href="#" class="btn" style="padding: 0.5rem 1rem; background: #3b82f6; color: white; text-decoration: none; border-radius: 6px; font-weight: 500; transition: background 0.2s;">Demo</a>
          <a href="#" class="btn" style="padding: 0.5rem 1rem; background: #1e293b; color: white; text-decoration: none; border-radius: 6px; font-weight: 500; transition: background 0.2s;">GitHub</a>
        </div>
      </div>
    </div>
  </section>
</div>

      `,
      styles: `
        .portfolio-container { background-color: #ffffff; }
        .hero-section { background: linear-gradient(135deg, #2563eb, #4f46e5); color: white; padding: 6rem 2rem; border-radius: 20px; text-align: center; margin-bottom: 3rem; }
        .profile-image { width: 150px; height: 150px; border-radius: 50%; border: 4px solid white; margin-bottom: 1.5rem; }
        .tech-stack { background: white; padding: 3rem; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); margin-bottom: 3rem; }
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1rem; }
        .project-card { background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
      `
    },
    {
      id: 2,
      name: 'Template 3',
      template: `
        <div class="portfolio-container design-theme" style="width: 100%; max-width: 1200px; margin: 0 auto; padding: 2rem; position: relative; background: #fafafa; box-sizing: border-box;">
          <header class="designer-hero" style="width: 100%; position: relative; text-align: center; padding: 6rem 2rem; background: white; border-radius: 30px; margin-bottom: 3rem; box-shadow: 0 4px 30px rgba(0,0,0,0.03); box-sizing: border-box;">
            <h1 style="font-size: 3rem; margin-bottom: 1rem; background: linear-gradient(135deg, #FF4D4D, #F9CB28); -webkit-background-clip: text; color: transparent; font-weight: 800;">Creative Designer</h1>
            <p style="font-size: 1.4rem; color: #666; margin-bottom: 3rem;">Crafting Digital Experiences</p>
            <div class="design-gallery" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; max-width: 800px; margin: 0 auto;">
              <img src="https://via.placeholder.com/600x400?format=webp" class="gallery-item" style="width: 100%; border-radius: 20px; box-shadow: 0 8px 30px rgba(0,0,0,0.1); transition: transform 0.3s;"/>
              <img src="https://via.placeholder.com/600x400?format=webp" class="gallery-item" style="width: 100%; border-radius: 20px; box-shadow: 0 8px 30px rgba(0,0,0,0.1); transition: transform 0.3s;"/>
            </div>
          </header>
  
          <section class="design-process" style="width: 100%; position: relative; background: white; padding: 4rem; border-radius: 30px; box-shadow: 0 4px 30px rgba(0,0,0,0.03); box-sizing: border-box;">
            <h2 style="font-size: 2rem; text-align: center; margin-bottom: 3rem; color: #333;">Design Process</h2>
            <div class="process-steps" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; text-align: center;">
              <div class="step" style="padding: 2rem; background: #f8f8f8; border-radius: 20px; font-weight: 500; color: #444; transition: transform 0.2s;">Research</div>
              <div class="step" style="padding: 2rem; background: #f8f8f8; border-radius: 20px; font-weight: 500; color: #444; transition: transform 0.2s;">Wireframe</div>
              <div class="step" style="padding: 2rem; background: #f8f8f8; border-radius: 20px; font-weight: 500; color: #444; transition: transform 0.2s;">Design</div>
              <div class="step" style="padding: 2rem; background: #f8f8f8; border-radius: 20px; font-weight: 500; color: #444; transition: transform 0.2s;">Test</div>
            </div>
          </section>
        </div>
      `,
      styles: `
        .portfolio-container { background-color: #fafafa; }
        .designer-hero { background: white; border-radius: 30px; margin-bottom: 3rem; box-shadow: 0 4px 30px rgba(0,0,0,0.03); }
        .gallery-item { border-radius: 20px; box-shadow: 0 8px 30px rgba(0,0,0,0.1); }
        .design-process { background: white; padding: 4rem; border-radius: 30px; box-shadow: 0 4px 30px rgba(0,0,0,0.03); }
        .process-steps { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; }
      `
    },
    {
      id: 3,
      name: 'Template 4',
      template: `
        <div class="portfolio-container photo-theme" style="width: 100%; max-width: 1400px; margin: 0 auto; padding: 2rem; position: relative; background: #000; box-sizing: border-box;">
          <div class="photo-grid" style="width: 100%; position: relative; display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2rem; padding: 2rem; box-sizing: border-box;">
            <div class="photo-item" style="position: relative; overflow: hidden; border-radius: 16px; aspect-ratio: 3/4;">
              <img src="https://via.placeholder.com/800x1200?format=webp" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s;"/>
              <div class="photo-overlay" style="position: absolute; bottom: 0; left: 0; right: 0; padding: 2rem; background: linear-gradient(transparent, rgba(0,0,0,0.8)); color: white;">
                <h3 style="font-size: 1.8rem; font-weight: 500;">Nature</h3>
              </div>
            </div>
            <div class="photo-item" style="position: relative; overflow: hidden; border-radius: 16px; aspect-ratio: 3/4;">
              <img src="https://via.placeholder.com/800x1200?format=webp" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s;"/>
              <div class="photo-overlay" style="position: absolute; bottom: 0; left: 0; right: 0; padding: 2rem; background: linear-gradient(transparent, rgba(0,0,0,0.8)); color: white;">
                <h3 style="font-size: 1.8rem; font-weight: 500;">Portrait</h3>
              </div>
            </div>
          </div>
        </div>
      `,
      styles: `
        .portfolio-container { background-color: #000; }
        .photo-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2rem; }
        .photo-item { position: relative; overflow: hidden; border-radius: 16px; aspect-ratio: 3/4; }
        .photo-overlay { position: absolute; bottom: 0; left: 0; right: 0; padding: 2rem; background: linear-gradient(transparent, rgba(0,0,0,0.8)); color: white; }
      `
    },{
      id: 4,
      name: 'Template 5',
      template: `<body style="margin: 0; font-family: 'Inter', sans-serif; background-color: #f8f9fa; color: #333; line-height: 1.6;">
    <!-- Navigation -->
    <nav style="display: flex; justify-content: space-between; align-items: center; padding: 20px 50px; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); position: sticky; top: 0; z-index: 100;">
        <div style="font-size: 24px; font-weight: 700; color: #2d2d2d;">PORTFOLIO</div>
        <div>
            <a href="#work" style="margin: 0 15px; text-decoration: none; color: #2d2d2d; font-weight: 500;">Work</a>
            <a href="#about" style="margin: 0 15px; text-decoration: none; color: #2d2d2d; font-weight: 500;">About</a>
            <a href="#contact" style="margin: 0 15px; text-decoration: none; color: #2d2d2d; font-weight: 500;">Contact</a>
        </div>
    </nav>

    <!-- Hero Section -->
    <header style="padding: 100px 50px; text-align: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
        <h1 style="font-size: 48px; margin-bottom: 20px;">Hi, I'm Alex</h1>
        <p style="font-size: 22px; max-width: 700px; margin: 0 auto 30px;">Digital designer & front-end developer creating beautiful, functional experiences</p>
        <a href="#work" style="display: inline-block; padding: 12px 30px; background-color: white; color: #2d2d2d; text-decoration: none; border-radius: 30px; font-weight: 600; transition: all 0.3s ease;">View My Work</a>
    </header>

    <!-- Featured Work -->
    <section id="work" style="padding: 80px 50px; max-width: 1200px; margin: 0 auto;">
        <h2 style="text-align: center; font-size: 36px; margin-bottom: 50px;">Featured Projects</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
            <!-- Project 1 -->
            <div style="background-color: white; border-radius: 10px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1); transition: transform 0.3s ease;">
                <img src="https://via.placeholder.com/600x400" alt="Project 1" style="width: 100%; height: 200px; object-fit: cover;">
                <div style="padding: 20px;">
                    <h3 style="margin: 0 0 10px; font-size: 22px;">E-commerce Website</h3>
                    <p style="color: #666; margin-bottom: 15px;">UI/UX Design, Front-end Development</p>
                    <a href="#" style="color: #667eea; text-decoration: none; font-weight: 600;">View Project →</a>
                </div>
            </div>
            
            <!-- Project 2 -->
            <div style="background-color: white; border-radius: 10px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1); transition: transform 0.3s ease;">
                <img src="https://via.placeholder.com/600x400" alt="Project 2" style="width: 100%; height: 200px; object-fit: cover;">
                <div style="padding: 20px;">
                    <h3 style="margin: 0 0 10px; font-size: 22px;">Mobile App Design</h3>
                    <p style="color: #666; margin-bottom: 15px;">UI Design, Prototyping</p>
                    <a href="#" style="color: #667eea; text-decoration: none; font-weight: 600;">View Project →</a>
                </div>
            </div>
            
            <!-- Project 3 -->
            <div style="background-color: white; border-radius: 10px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1); transition: transform 0.3s ease;">
                <img src="https://via.placeholder.com/600x400" alt="Project 3" style="width: 100%; height: 200px; object-fit: cover;">
                <div style="padding: 20px;">
                    <h3 style="margin: 0 0 10px; font-size: 22px;">Brand Identity</h3>
                    <p style="color: #666; margin-bottom: 15px;">Logo Design, Branding</p>
                    <a href="#" style="color: #667eea; text-decoration: none; font-weight: 600;">View Project →</a>
                </div>
            </div>
        </div>
        
        <div style="text-align: center; margin-top: 50px;">
            <a href="#" style="display: inline-block; padding: 12px 30px; border: 2px solid #667eea; color: #667eea; text-decoration: none; border-radius: 30px; font-weight: 600; transition: all 0.3s ease;">View All Projects</a>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" style="padding: 80px 50px; background-color: #f0f2f5;">
        <div style="max-width: 1000px; margin: 0 auto; display: flex; flex-wrap: wrap; align-items: center; gap: 50px;">
            <div style="flex: 1; min-width: 300px;">
                <img src="https://via.placeholder.com/500x500" alt="Profile" style="width: 100%; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            </div>
            <div style="flex: 1; min-width: 300px;">
                <h2 style="font-size: 36px; margin-bottom: 20px;">About Me</h2>
                <p style="margin-bottom: 20px; color: #555;">I'm a passionate designer and developer with 5+ years of experience creating digital experiences that users love. My approach combines aesthetic sensibility with technical expertise.</p>
                <p style="margin-bottom: 30px; color: #555;">When I'm not designing, you can find me hiking, reading, or experimenting with new web technologies.</p>
                
                <h3 style="font-size: 22px; margin-bottom: 15px;">Skills</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 30px;">
                    <span style="padding: 8px 15px; background-color: #e0e7ff; color: #4f46e5; border-radius: 20px; font-size: 14px;">UI/UX Design</span>
                    <span style="padding: 8px 15px; background-color: #e0e7ff; color: #4f46e5; border-radius: 20px; font-size: 14px;">HTML/CSS</span>
                    <span style="padding: 8px 15px; background-color: #e0e7ff; color: #4f46e5; border-radius: 20px; font-size: 14px;">JavaScript</span>
                    <span style="padding: 8px 15px; background-color: #e0e7ff; color: #4f46e5; border-radius: 20px; font-size: 14px;">Figma</span>
                    <span style="padding: 8px 15px; background-color: #e0e7ff; color: #4f46e5; border-radius: 20px; font-size: 14px;">React</span>
                </div>
                
                <a href="#" style="display: inline-block; padding: 12px 30px; background-color: #667eea; color: white; text-decoration: none; border-radius: 30px; font-weight: 600; transition: all 0.3s ease;">Download Resume</a>
            </div>
        </div>
    </section>

    <!-- Testimonials -->
    <section style="padding: 80px 50px; max-width: 1000px; margin: 0 auto;">
        <h2 style="text-align: center; font-size: 36px; margin-bottom: 50px;">What Clients Say</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
            <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <p style="font-style: italic; margin-bottom: 20px;">"Alex delivered beyond our expectations. The design was not only beautiful but also highly functional and user-friendly."</p>
                <div style="display: flex; align-items: center;">
                    <img src="https://via.placeholder.com/50x50" alt="Client" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 15px;">
                    <div>
                        <h4 style="margin: 0; font-size: 18px;">Sarah Johnson</h4>
                        <p style="margin: 0; color: #666; font-size: 14px;">CEO, TechStart</p>
                    </div>
                </div>
            </div>
            
            <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <p style="font-style: italic; margin-bottom: 20px;">"Working with Alex was a pleasure. They understood our vision perfectly and executed it flawlessly."</p>
                <div style="display: flex; align-items: center;">
                    <img src="https://via.placeholder.com/50x50" alt="Client" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 15px;">
                    <div>
                        <h4 style="margin: 0; font-size: 18px;">Michael Chen</h4>
                        <p style="margin: 0; color: #666; font-size: 14px;">Marketing Director, BrandCo</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" style="padding: 80px 50px; background-color: #2d2d2d; color: white;">
        <div style="max-width: 800px; margin: 0 auto; text-align: center;">
            <h2 style="font-size: 36px; margin-bottom: 20px;">Let's Work Together</h2>
            <p style="max-width: 600px; margin: 0 auto 30px; color: #bbb;">Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!</p>
            
            <form style="display: grid; gap: 20px; max-width: 500px; margin: 0 auto;">
                <input type="text" placeholder="Your Name" style="padding: 15px; border-radius: 5px; border: none; background-color: rgba(255,255,255,0.1); color: white;">
                <input type="email" placeholder="Your Email" style="padding: 15px; border-radius: 5px; border: none; background-color: rgba(255,255,255,0.1); color: white;">
                <textarea placeholder="Your Message" rows="5" style="padding: 15px; border-radius: 5px; border: none; background-color: rgba(255,255,255,0.1); color: white;"></textarea>
                <button type="submit" style="padding: 15px 30px; background-color: #667eea; color: white; border: none; border-radius: 5px; font-weight: 600; cursor: pointer; transition: all 0.3s ease;">Send Message</button>
            </form>
        </div>
    </section>

    <!-- Footer -->
    <footer style="padding: 30px 50px; background-color: #1a1a1a; color: #aaa; text-align: center;">
        <div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 20px;">
            <a href="#" style="color: #aaa; text-decoration: none; font-size: 20px;">LinkedIn</a>
            <a href="#" style="color: #aaa; text-decoration: none; font-size: 20px;">Dribbble</a>
            <a href="#" style="color: #aaa; text-decoration: none; font-size: 20px;">GitHub</a>
            <a href="#" style="color: #aaa; text-decoration: none; font-size: 20px;">Twitter</a>
        </div>
        <p style="margin: 0;">© 2023 My Portfolio. All rights reserved.</p>
    </footer>
</body>`,
    },
    {
      id: 5,
      name: 'Template 6',
      template: `<body style="margin: 0; font-family: 'Inter', sans-serif; background-color: #121212; color: #e0e0e0;">
    <!-- Navigation -->
    <nav style="display: flex; justify-content: space-between; align-items: center; padding: 25px 50px; background-color: #1e1e1e; position: sticky; top: 0; z-index: 100; border-bottom: 1px solid #333;">
        <div style="font-size: 24px; font-weight: 700; color: #ff4d4d;">STUDIO<span style="color: #e0e0e0;">CUT</span></div>
        <div>
            <a href="#showreel" style="margin: 0 15px; text-decoration: none; color: #e0e0e0; font-weight: 500;">Showreel</a>
            <a href="#projects" style="margin: 0 15px; text-decoration: none; color: #e0e0e0; font-weight: 500;">Projects</a>
            <a href="#services" style="margin: 0 15px; text-decoration: none; color: #e0e0e0; font-weight: 500;">Services</a>
            <a href="#contact" style="margin: 0 15px; text-decoration: none; color: #ff4d4d; font-weight: 600;">Contact</a>
        </div>
    </nav>

    <!-- Hero Section -->
    <header style="padding: 120px 50px; text-align: center; background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'); background-size: cover; background-position: center;">
        <h1 style="font-size: 64px; margin-bottom: 20px; letter-spacing: 2px;">CRAFTING VISUAL <span style="color: #ff4d4d;">STORIES</span></h1>
        <p style="font-size: 20px; max-width: 700px; margin: 0 auto 40px; color: #b0b0b0;">Professional video editor specializing in cinematic storytelling, commercial editing, and post-production</p>
        <a href="#showreel" style="display: inline-flex; align-items: center; padding: 15px 40px; background-color: #ff4d4d; color: white; text-decoration: none; border-radius: 3px; font-weight: 600; letter-spacing: 1px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style="margin-right: 10px;">
                <path d="M8 5V19L19 12L8 5Z" fill="white"/>
            </svg>
            WATCH SHOWREEL
        </a>
    </header>

    <!-- Showreel Section -->
    <section id="showreel" style="padding: 100px 50px; background-color: #1a1a1a;">
        <div style="max-width: 1200px; margin: 0 auto;">
            <h2 style="font-size: 36px; margin-bottom: 50px; text-align: center;">SHOW<span style="color: #ff4d4d;">REEL</span></h2>
            
            <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; background-color: #000;">
                <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Video thumbnail" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center;">
                    <div style="width: 80px; height: 80px; background-color: rgba(255,77,77,0.8); border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                            <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            </div>
            
            <div style="display: flex; justify-content: space-between; margin-top: 30px; color: #b0b0b0; font-size: 14px;">
                <span>2023 REEL • 2:45</span>
                <span>4K RESOLUTION • HDR</span>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" style="padding: 100px 50px;">
        <div style="max-width: 1400px; margin: 0 auto;">
            <h2 style="font-size: 36px; margin-bottom: 20px; text-align: center;">SELECTED <span style="color: #ff4d4d;">PROJECTS</span></h2>
            <p style="text-align: center; max-width: 700px; margin: 0 auto 60px; color: #b0b0b0;">A curated selection of my best work across different genres and styles</p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
                <!-- Project 1 -->
                <div style="position: relative; overflow: hidden; height: 400px;">
                    <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Commercial Project" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;">
                    <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 30px; background: linear-gradient(transparent, rgba(0,0,0,0.8));">
                        <h3 style="margin: 0 0 5px; font-size: 22px;">Nike Commercial</h3>
                        <p style="margin: 0; color: #b0b0b0; font-size: 14px;">Editing • Color Grading • Motion Graphics</p>
                    </div>
                </div>
                
                <!-- Project 2 -->
                <div style="position: relative; overflow: hidden; height: 400px;">
                    <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Music Video" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;">
                    <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 30px; background: linear-gradient(transparent, rgba(0,0,0,0.8));">
                        <h3 style="margin: 0 0 5px; font-size: 22px;">The Weekend - Music Video</h3>
                        <p style="margin: 0; color: #b0b0b0; font-size: 14px;">Editing • Visual Effects • Color Correction</p>
                    </div>
                </div>
                
                <!-- Project 3 -->
                <div style="position: relative; overflow: hidden; height: 400px;">
                    <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Short Film" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;">
                    <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 30px; background: linear-gradient(transparent, rgba(0,0,0,0.8));">
                        <h3 style="margin: 0 0 5px; font-size: 22px;">"Midnight" Short Film</h3>
                        <p style="margin: 0; color: #b0b0b0; font-size: 14px;">Editing • Sound Design • Titles</p>
                    </div>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 60px;">
                <a href="#" style="display: inline-block; padding: 15px 40px; border: 1px solid #ff4d4d; color: #ff4d4d; text-decoration: none; font-weight: 600; letter-spacing: 1px;">VIEW ALL PROJECTS</a>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" style="padding: 100px 50px; background-color: #1a1a1a;">
        <div style="max-width: 1200px; margin: 0 auto;">
            <h2 style="font-size: 36px; margin-bottom: 20px; text-align: center;">EDITING <span style="color: #ff4d4d;">SERVICES</span></h2>
            <p style="text-align: center; max-width: 700px; margin: 0 auto 60px; color: #b0b0b0;">Comprehensive post-production services tailored to your project needs</p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px;">
                <!-- Service 1 -->
                <div style="background-color: #252525; padding: 40px 30px; border-top: 3px solid #ff4d4d;">
                    <h3 style="margin-top: 0; font-size: 22px; margin-bottom: 20px;">VIDEO EDITING</h3>
                    <p style="color: #b0b0b0; margin-bottom: 25px;">Professional editing for commercials, music videos, and corporate content with seamless transitions and perfect pacing.</p>
                    <ul style="list-style-type: none; padding: 0; margin: 0; color: #b0b0b0;">
                        <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style="margin-right: 10px; flex-shrink: 0; margin-top: 2px;">
                                <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="#ff4d4d"/>
                            </svg>
                            Multi-cam editing
                        </li>
                        <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style="margin-right: 10px; flex-shrink: 0; margin-top: 2px;">
                                <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="#ff4d4d"/>
                            </svg>
                            Story-driven narrative
                        </li>
                        <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style="margin-right: 10px; flex-shrink: 0; margin-top: 2px;">
                                <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="#ff4d4d"/>
                            </svg>
                            Fast turnaround
                        </li>
                    </ul>
                </div>
                
                <!-- Service 2 -->
                <div style="background-color: #252525; padding: 40px 30px; border-top: 3px solid #ff4d4d;">
                    <h3 style="margin-top: 0; font-size: 22px; margin-bottom: 20px;">COLOR GRADING</h3>
                    <p style="color: #b0b0b0; margin-bottom: 25px;">Cinematic color grading to enhance mood and visual style, from subtle corrections to bold creative looks.</p>
                    <ul style="list-style-type: none; padding: 0; margin: 0; color: #b0b0b0;">
                        <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style="margin-right: 10px; flex-shrink: 0; margin-top: 2px;">
                                <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="#ff4d4d"/>
                            </svg>
                            DaVinci Resolve
                        </li>
                        <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style="margin-right: 10px; flex-shrink: 0; margin-top: 2px;">
                                <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="#ff4d4d"/>
                            </svg>
                            HDR grading
                        </li>
                        <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style="margin-right: 10px; flex-shrink: 0; margin-top: 2px;">
                                <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="#ff4d4d"/>
                            </svg>
                            Look development
                        </li>
                    </ul>
                </div>
                
                <!-- Service 3 -->
                <div style="background-color: #252525; padding: 40px 30px; border-top: 3px solid #ff4d4d;">
                    <h3 style="margin-top: 0; font-size: 22px; margin-bottom: 20px;">MOTION GRAPHICS</h3>
                    <p style="color: #b0b0b0; margin-bottom: 25px;">Dynamic motion graphics and visual effects to elevate your content with engaging animated elements.</p>
                    <ul style="list-style-type: none; padding: 0; margin: 0; color: #b0b0b0;">
                        <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style="margin-right: 10px; flex-shrink: 0; margin-top: 2px;">
                                <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="#ff4d4d"/>
                            </svg>
                            Title sequences
                        </li>
                        <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style="margin-right: 10px; flex-shrink: 0; margin-top: 2px;">
                                <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="#ff4d4d"/>
                            </svg>
                            Lower thirds
                        </li>
                        <li style="margin-bottom: 10px; display: flex; align-items: flex-start;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style="margin-right: 10px; flex-shrink: 0; margin-top: 2px;">
                                <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="#ff4d4d"/>
                            </svg>
                            Animated logos
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Clients Section -->
    <section style="padding: 80px 50px;">
        <div style="max-width: 1200px; margin: 0 auto;">
            <h2 style="font-size: 36px; margin-bottom: 50px; text-align: center;">TRUSTED BY <span style="color: #ff4d4d;">CLIENTS</span></h2>
            
            <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 50px; align-items: center;">
                <img src="https://via.placeholder.com/150x60?text=Nike" alt="Nike" style="filter: brightness(0) invert(0.7); height: 40px;">
                <img src="https://via.placeholder.com/150x60?text=Sony" alt="Sony" style="filter: brightness(0) invert(0.7); height: 40px;">
                <img src="https://via.placeholder.com/150x60?text=Netflix" alt="Netflix" style="filter: brightness(0) invert(0.7); height: 40px;">
                <img src="https://via.placeholder.com/150x60?text=Adidas" alt="Adidas" style="filter: brightness(0) invert(0.7); height: 40px;">
                <img src="https://via.placeholder.com/150x60?text=RedBull" alt="RedBull" style="filter: brightness(0) invert(0.7); height: 40px;">
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" style="padding: 100px 50px; background-color: #1a1a1a;">
        <div style="max-width: 1000px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 50px;">
            <div>
                <h2 style="font-size: 36px; margin-bottom: 30px;">GET IN <span style="color: #ff4d4d;">TOUCH</span></h2>
                <p style="color: #b0b0b0; margin-bottom: 30px;">Have a project in mind or want to discuss potential collaboration? I'd love to hear from you.</p>
                
                <div style="margin-bottom: 30px;">
                    <h3 style="font-size: 18px; margin-bottom: 15px; color: #e0e0e0;">CONTACT INFO</h3>
                    <p style="color: #b0b0b0; margin-bottom: 10px;">hello@studiocut.com</p>
                    <p style="color: #b0b0b0; margin-bottom: 10px;">+1 (555) 123-4567</p>
                    <p style="color: #b0b0b0;">Los Angeles, CA</p>
                </div>
                
                <div>
                    <h3 style="font-size: 18px; margin-bottom: 15px; color: #e0e0e0;">FOLLOW ME</h3>
                    <div style="display: flex; gap: 15px;">
                        <a href="#" style="color: #b0b0b0; text-decoration: none;">Instagram</a>
                        <a href="#" style="color: #b0b0b0; text-decoration: none;">Vimeo</a>
                        <a href="#" style="color: #b0b0b0; text-decoration: none;">LinkedIn</a>
                    </div>
                </div>
            </div>
            
            <div>
                <form style="display: grid; gap: 20px;">
                    <input type="text" placeholder="Your Name" style="padding: 15px; background-color: #252525; border: 1px solid #333; color: #e0e0e0;">
                    <input type="email" placeholder="Your Email" style="padding: 15px; background-color: #252525; border: 1px solid #333; color: #e0e0e0;">
                    <select style="padding: 15px; background-color: #252525; border: 1px solid #333; color: #e0e0e0;">
                        <option>Select Service</option>
                        <option>Video Editing</option>
                        <option>Color Grading</option>
                        <option>Motion Graphics</option>
                        <option>Full Post-Production</option>
                    </select>
                    <textarea placeholder="Your Message" rows="5" style="padding: 15px; background-color: #252525; border: 1px solid #333; color: #e0e0e0;"></textarea>
                    <button type="submit" style="padding: 15px; background-color: #ff4d4d; color: white; border: none; font-weight: 600; cursor: pointer;">SEND MESSAGE</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer style="padding: 30px; text-align: center; background-color: #121212; color: #b0b0b0; font-size: 14px;">
        <p style="margin: 0;">© 2023 STUDIOCUT. All rights reserved.</p>
    </footer>

    <!-- Simple hover effects -->
    <script>
        // Add hover effect to project images
        document.querySelectorAll('#projects > div > div > div').forEach(item => {
            item.addEventListener('mouseover', function() {
                this.querySelector('img').style.transform = 'scale(1.05)';
            });
            item.addEventListener('mouseout', function() {
                this.querySelector('img').style.transform = 'scale(1)';
            });
        });
    </script>
</body>`,
    },
    {
      id: 6,
      name: 'Template 7',
      template: `<body style="margin: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f7fa; color: #333; line-height: 1.6;">
    <!-- Navigation -->
    <nav style="display: flex; justify-content: space-between; align-items: center; padding: 20px 40px; background-color: #4f46e5; color: white; position: sticky; top: 0; z-index: 100;">
        <div style="font-size: 22px; font-weight: 700;">STUDENT PORTFOLIO</div>
        <div>
            <a href="#about" style="margin: 0 15px; text-decoration: none; color: white; font-weight: 500;">About</a>
            <a href="#projects" style="margin: 0 15px; text-decoration: none; color: white; font-weight: 500;">Projects</a>
            <a href="#skills" style="margin: 0 15px; text-decoration: none; color: white; font-weight: 500;">Skills</a>
            <a href="#contact" style="margin: 0 15px; text-decoration: none; color: white; font-weight: 500;">Contact</a>
        </div>
    </nav>

    <!-- Hero Section -->
    <header style="padding: 100px 40px; text-align: center; background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); color: white;">
        <h1 style="font-size: 48px; margin-bottom: 20px;">Hi, I'm <span style="color: #fbbf24;">Alex</span></h1>
        <p style="font-size: 22px; max-width: 700px; margin: 0 auto 30px;">Computer Science Student | Aspiring Developer | Tech Enthusiast</p>
        <div style="display: flex; justify-content: center; gap: 20px;">
            <a href="#projects" style="display: inline-block; padding: 12px 30px; background-color: white; color: #4f46e5; text-decoration: none; border-radius: 30px; font-weight: 600;">View My Work</a>
            <a href="#contact" style="display: inline-block; padding: 12px 30px; border: 2px solid white; color: white; text-decoration: none; border-radius: 30px; font-weight: 600;">Contact Me</a>
        </div>
    </header>

    <!-- About Section -->
    <section id="about" style="padding: 80px 40px; max-width: 1000px; margin: 0 auto;">
        <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 50px;">
            <div style="flex: 1; min-width: 300px;">
                <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Student" style="width: 100%; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            </div>
            <div style="flex: 1; min-width: 300px;">
                <h2 style="font-size: 36px; margin-bottom: 20px; color: #4f46e5;">About Me</h2>
                <p style="margin-bottom: 20px;">I'm a third-year Computer Science student at State University with a passion for software development and problem-solving. Currently maintaining a 3.8 GPA while actively participating in coding competitions and hackathons.</p>
                <p style="margin-bottom: 30px;">When I'm not studying or coding, you can find me playing chess, contributing to open-source projects, or mentoring first-year students in our university's coding club.</p>
                
                <div style="background-color: #e0e7ff; padding: 20px; border-radius: 10px;">
                    <h3 style="margin-top: 0; color: #4f46e5;">Education</h3>
                    <p style="margin-bottom: 10px;"><strong>Bachelor of Science in Computer Science</strong><br>
                    State University | Expected Graduation: May 2024</p>
                    <p><strong>Relevant Coursework:</strong> Data Structures, Algorithms, Web Development, Database Systems, Machine Learning</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" style="padding: 80px 40px; background-color: white;">
        <div style="max-width: 1200px; margin: 0 auto;">
            <h2 style="text-align: center; font-size: 36px; margin-bottom: 50px; color: #4f46e5;">My Projects</h2>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
                <!-- Project 1 -->
                <div style="background-color: #f9fafb; border-radius: 10px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.05); transition: transform 0.3s ease;">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Project 1" style="width: 100%; height: 200px; object-fit: cover;">
                    <div style="padding: 20px;">
                        <h3 style="margin: 0 0 10px; font-size: 22px;">Student Planner App</h3>
                        <p style="color: #666; margin-bottom: 15px;">A mobile application to help students organize assignments, exams, and study schedules.</p>
                        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 15px;">
                            <span style="padding: 5px 10px; background-color: #e0e7ff; color: #4f46e5; border-radius: 20px; font-size: 12px;">Flutter</span>
                            <span style="padding: 5px 10px; background-color: #e0e7ff; color: #4f46e5; border-radius: 20px; font-size: 12px;">Firebase</span>
                            <span style="padding: 5px 10px; background-color: #e0e7ff; color: #4f46e5; border-radius: 20px; font-size: 12px;">Dart</span>
                        </div>
                        <a href="#" style="color: #4f46e5; text-decoration: none; font-weight: 600;">View Project →</a>
                    </div>
                </div>
                
                <!-- Project 2 -->
                <div style="background-color: #f9fafb; border-radius: 10px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.05); transition: transform 0.3s ease;">
                    <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Project 2" style="width: 100%; height: 200px; object-fit: cover;">
                    <div style="padding: 20px;">
                        <h3 style="margin: 0 0 10px; font-size: 22px;">Campus Navigation System</h3>
                        <p style="color: #666; margin-bottom: 15px;">Web-based interactive map for university campus with real-time updates.</p>
                        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 15px;">
                            <span style="padding: 5px 10px; background-color: #e0e7ff; color: #4f46e5; border-radius: 20px; font-size: 12px;">React</span>
                            <span style="padding: 5px 10px; background-color: #e0e7ff; color: #4f46e5; border-radius: 20px; font-size: 12px;">Node.js</span>
                            <span style="padding: 5px 10px; background-color: #e0e7ff; color: #4f46e5; border-radius: 20px; font-size: 12px;">MongoDB</span>
                        </div>
                        <a href="#" style="color: #4f46e5; text-decoration: none; font-weight: 600;">View Project →</a>
                    </div>
                </div>
                
                <!-- Project 3 -->
                <div style="background-color: #f9fafb; border-radius: 10px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.05); transition: transform 0.3s ease;">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Project 3" style="width: 100%; height: 200px; object-fit: cover;">
                    <div style="padding: 20px;">
                        <h3 style="margin: 0 0 10px; font-size: 22px;">AI Research Assistant</h3>
                        <p style="color: #666; margin-bottom: 15px;">Machine learning tool to help students find relevant academic papers.</p>
                        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 15px;">
                            <span style="padding: 5px 10px; background-color: #e0e7ff; color: #4f46e5; border-radius: 20px; font-size: 12px;">Python</span>
                            <span style="padding: 5px 10px; background-color: #e0e7ff; color: #4f46e5; border-radius: 20px; font-size: 12px;">TensorFlow</span>
                            <span style="padding: 5px 10px; background-color: #e0e7ff; color: #4f46e5; border-radius: 20px; font-size: 12px;">NLP</span>
                        </div>
                        <a href="#" style="color: #4f46e5; text-decoration: none; font-weight: 600;">View Project →</a>
                    </div>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 50px;">
                <a href="#" style="display: inline-block; padding: 12px 30px; border: 2px solid #4f46e5; color: #4f46e5; text-decoration: none; border-radius: 30px; font-weight: 600;">View All Projects</a>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" style="padding: 80px 40px; max-width: 1000px; margin: 0 auto;">
        <h2 style="text-align: center; font-size: 36px; margin-bottom: 50px; color: #4f46e5;">My Skills</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 30px;">
            <!-- Technical Skills -->
            <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <h3 style="margin-top: 0; color: #4f46e5;">Technical</h3>
                <ul style="list-style-type: none; padding: 0;">
                    <li style="margin-bottom: 10px; display: flex; align-items: center;">
                        <span style="display: inline-block; width: 10px; height: 10px; background-color: #4f46e5; border-radius: 50%; margin-right: 10px;"></span>
                        Python (Advanced)
                    </li>
                    <li style="margin-bottom: 10px; display: flex; align-items: center;">
                        <span style="display: inline-block; width: 10px; height: 10px; background-color: #4f46e5; border-radius: 50%; margin-right: 10px;"></span>
                        Java (Intermediate)
                    </li>
                    <li style="margin-bottom: 10px; display: flex; align-items: center;">
                        <span style="display: inline-block; width: 10px; height: 10px; background-color: #4f46e5; border-radius: 50%; margin-right: 10px;"></span>
                        JavaScript (Intermediate)
                    </li>
                    <li style="margin-bottom: 10px; display: flex; align-items: center;">
                        <span style="display: inline-block; width: 10px; height: 10px; background-color: #4f46e5; border-radius: 50%; margin-right: 10px;"></span>
                        HTML/CSS (Advanced)
                    </li>
                    <li style="margin-bottom: 10px; display: flex; align-items: center;">
                        <span style="display: inline-block; width: 10px; height: 10px; background-color: #4f46e5; border-radius: 50%; margin-right: 10px;"></span>
                        SQL (Intermediate)
                    </li>
                </ul>
            </div>
            
            <!-- Tools & Frameworks -->
            <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <h3 style="margin-top: 0; color: #4f46e5;">Tools & Frameworks</h3>
                <ul style="list-style-type: none; padding: 0;">
                    <li style="margin-bottom: 10px; display: flex; align-items: center;">
                        <span style="display: inline-block; width: 10px; height: 10px; background-color: #4f46e5; border-radius: 50%; margin-right: 10px;"></span>
                        React.js
                    </li>
                    <li style="margin-bottom: 10px; display: flex; align-items: center;">
                        <span style="display: inline-block; width: 10px; height: 10px; background-color: #4f46e5; border-radius: 50%; margin-right: 10px;"></span>
                        Node.js
                    </li>
                    <li style="margin-bottom: 10px; display: flex; align-items: center;">
                        <span style="display: inline-block; width: 10px; height: 10px; background-color: #4f46e5; border-radius: 50%; margin-right: 10px;"></span>
                        Git/GitHub
                    </li>
                    <li style="margin-bottom: 10px; display: flex; align-items: center;">
                        <span style="display: inline-block; width: 10px; height: 10px; background-color: #4f46e5; border-radius: 50%; margin-right: 10px;"></span>
                        VS Code
                    </li>
                    <li style="margin-bottom: 10px; display: flex; align-items: center;">
                        <span style="display: inline-block; width: 10px; height: 10px; background-color: #4f46e5; border-radius: 50%; margin-right: 10px;"></span>
                        Android Studio
                    </li>
                </ul>
            </div>
            
            <!-- Soft Skills -->
            <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                <h3 style="margin-top: 0; color: #4f46e5;">Soft Skills</h3>
                <ul style="list-style-type: none; padding: 0;">
                    <li style="margin-bottom: 10px; display: flex; align-items: center;">
                        <span style="display: inline-block; width: 10px; height: 10px; background-color: #4f46e5; border-radius: 50%; margin-right: 10px;"></span>
                        Teamwork
                    </li>
                    <li style="margin-bottom: 10px; display: flex; align-items: center;">
                        <span style="display: inline-block; width: 10px; height: 10px; background-color: #4f46e5; border-radius: 50%; margin-right: 10px;"></span>
                        Problem Solving
                    </li>
                    <li style="margin-bottom: 10px; display: flex; align-items: center;">
                        <span style="display: inline-block; width: 10px; height: 10px; background-color: #4f46e5; border-radius: 50%; margin-right: 10px;"></span>
                        Communication
                    </li>
                    <li style="margin-bottom: 10px; display: flex; align-items: center;">
                        <span style="display: inline-block; width: 10px; height: 10px; background-color: #4f46e5; border-radius: 50%; margin-right: 10px;"></span>
                        Time Management
                    </li>
                    <li style="margin-bottom: 10px; display: flex; align-items: center;">
                        <span style="display: inline-block; width: 10px; height: 10px; background-color: #4f46e5; border-radius: 50%; margin-right: 10px;"></span>
                        Leadership
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <!-- Achievements Section -->
    <section style="padding: 80px 40px; background-color: #4f46e5; color: white;">
        <div style="max-width: 1000px; margin: 0 auto;">
            <h2 style="text-align: center; font-size: 36px; margin-bottom: 50px;">Achievements</h2>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px;">
                <div style="text-align: center; padding: 30px; background-color: rgba(255,255,255,0.1); border-radius: 10px;">
                    <div style="font-size: 40px; font-weight: 700; margin-bottom: 10px;">1st</div>
                    <p style="margin: 0;">Place in University Hackathon 2023</p>
                </div>
                
                <div style="text-align: center; padding: 30px; background-color: rgba(255,255,255,0.1); border-radius: 10px;">
                    <div style="font-size: 40px; font-weight: 700; margin-bottom: 10px;">3.8</div>
                    <p style="margin: 0;">Current GPA</p>
                </div>
                
                <div style="text-align: center; padding: 30px; background-color: rgba(255,255,255,0.1); border-radius: 10px;">
                    <div style="font-size: 40px; font-weight: 700; margin-bottom: 10px;">500+</div>
                    <p style="margin: 0;">Hours of Coding Experience</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" style="padding: 80px 40px; max-width: 800px; margin: 0 auto;">
        <h2 style="text-align: center; font-size: 36px; margin-bottom: 50px; color: #4f46e5;">Get In Touch</h2>
        
        <form style="display: grid; gap: 20px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                <input type="text" placeholder="Your Name" style="padding: 15px; border: 1px solid #ddd; border-radius: 5px;">
                <input type="email" placeholder="Your Email" style="padding: 15px; border: 1px solid #ddd; border-radius: 5px;">
            </div>
            <input type="text" placeholder="Subject" style="padding: 15px; border: 1px solid #ddd; border-radius: 5px;">
            <textarea placeholder="Your Message" rows="5" style="padding: 15px; border: 1px solid #ddd; border-radius: 5px;"></textarea>
            <button type="submit" style="padding: 15px; background-color: #4f46e5; color: white; border: none; border-radius: 5px; font-weight: 600; cursor: pointer;">Send Message</button>
        </form>
        
        <div style="display: flex; justify-content: center; gap: 20px; margin-top: 50px;">
            <a href="#" style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background-color: #4f46e5; color: white; border-radius: 50%; text-decoration: none;">Li</a>
            <a href="#" style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background-color: #4f46e5; color: white; border-radius: 50%; text-decoration: none;">Gh</a>
            <a href="#" style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background-color: #4f46e5; color: white; border-radius: 50%; text-decoration: none;">Tw</a>
            <a href="#" style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background-color: #4f46e5; color: white; border-radius: 50%; text-decoration: none;">Ig</a>
        </div>
    </section>

    <!-- Footer -->
    <footer style="padding: 30px; text-align: center; background-color: #1e1b4b; color: white;">
        <p style="margin: 0;">© 2023 Student Portfolio. All rights reserved.</p>
    </footer>

    <!-- Simple hover effects -->
    <script>
        // Add hover effect to project cards
        document.querySelectorAll('#projects > div > div > div').forEach(item => {
            item.addEventListener('mouseover', function() {
                this.style.transform = 'translateY(-10px)';
            });
            item.addEventListener('mouseout', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    </script>
</body>`,
    }
  ];