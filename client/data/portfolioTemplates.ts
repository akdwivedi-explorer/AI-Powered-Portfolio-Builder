export const portfolioTemplates = [
    {
      id: 1,
      name: 'Software Developer',
      template: `
        <div class="portfolio-container" style="width: 100%; max-width: 1200px; margin: 0 auto; padding: 2rem; position: relative;">
          <header class="hero-section" style="width: 100%; position: relative; background: linear-gradient(135deg, #2563eb, #4f46e5); color: white; padding: 6rem 2rem; border-radius: 20px; text-align: center; margin-bottom: 3rem; box-sizing: border-box;">
            <div class="profile-box" style="position: relative; width: 100%; max-width: 600px; margin: 0 auto;">
              <img src="https://via.placeholder.com/150?format=webp" class="profile-image" style="width: 150px; height: 150px; border-radius: 50%; border: 4px solid white; margin-bottom: 1.5rem; box-shadow: 0 4px 20px rgba(0,0,0,0.1);"/>
              <h1 style="font-size: 2.5rem; margin-bottom: 1rem; font-weight: 700;">Software Developer</h1>
              <p class="tagline" style="font-size: 1.2rem; opacity: 0.9;">Full Stack Developer | Cloud Solutions | AI Enthusiast</p>
            </div>
          </header>
          
          <section class="tech-stack" style="width: 100%; position: relative; background: white; padding: 3rem; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); margin-bottom: 3rem; box-sizing: border-box;">
            <h2 style="font-size: 1.8rem; margin-bottom: 2rem; color: #1e293b; text-align: center;">Tech Stack</h2>
            <div class="skills-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1rem;">
              <div class="skill-item" style="background: #f8fafc; padding: 1rem; border-radius: 12px; text-align: center; font-weight: 500; color: #334155; transition: transform 0.2s;">JavaScript</div>
              <div class="skill-item" style="background: #f8fafc; padding: 1rem; border-radius: 12px; text-align: center; font-weight: 500; color: #334155; transition: transform 0.2s;">React</div>
              <div class="skill-item" style="background: #f8fafc; padding: 1rem; border-radius: 12px; text-align: center; font-weight: 500; color: #334155; transition: transform 0.2s;">Node.js</div>
              <div class="skill-item" style="background: #f8fafc; padding: 1rem; border-radius: 12px; text-align: center; font-weight: 500; color: #334155; transition: transform 0.2s;">Python</div>
            </div>
          </section>
  
          <section class="projects-grid" style="width: 100%; position: relative; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; box-sizing: border-box;">
            <div class="project-card" style="background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05); transition: transform 0.2s;">
              <img src="https://via.placeholder.com/600x400?format=webp" style="width: 100%; height: 200px; object-fit: cover;"/>
              <div class="project-info" style="padding: 1.5rem;">
                <h3 style="font-size: 1.4rem; margin-bottom: 0.5rem; color: #1e293b;">Project Name</h3>
                <p style="color: #64748b; margin-bottom: 1rem;">Project description goes here</p>
                <div class="project-links" style="display: flex; gap: 1rem;">
                  <a href="#" class="btn" style="padding: 0.5rem 1rem; background: #3b82f6; color: white; text-decoration: none; border-radius: 6px; font-weight: 500; transition: background 0.2s;">Demo</a>
                  <a href="#" class="btn" style="padding: 0.5rem 1rem; background: #1e293b; color: white; text-decoration: none; border-radius: 6px; font-weight: 500; transition: background 0.2s;">Github</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      `
    },
    {
      id: 2,
      name: 'UI/UX Designer',
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
      `
    },
    {
      id: 3,
      name: 'Photographer',
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
      `
    }
  ];