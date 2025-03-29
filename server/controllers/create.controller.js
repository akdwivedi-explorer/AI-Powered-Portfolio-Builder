import portfolioModel from "../models/portfolio.model.js";

export const createPortfolio = async (req, res) => {
    try {
        const extractedData = req.body?.extractedData || {};  // Ensure extractedData is always an object

        if (!extractedData || typeof extractedData !== 'object') {
            return res.status(400).json({ success: false, error: "No valid extracted data provided" });
        }

        // Check if user is authenticated
        if (!req.user?._id) {
            return res.status(401).json({ success: false, error: "Unauthorized. Please log in." });
        }

        // Construct portfolio data
        const portfolioData = {
            userId: req.user._id,
            personalInfo: {
                name: extractedData.name || "",
                email: extractedData.email || "",
                phone: extractedData.phone || "",
                location: extractedData.location || "",
                website: extractedData.website || "",
                linkedin: extractedData.linkedin || "",
                github: extractedData.github || "",
                summary: extractedData.summary || "",
                profilePicture: extractedData.profilePicture || ""
            },
            skills: Array.isArray(extractedData.skills) ? extractedData.skills.map(skill => ({
                name: skill.name || "",
                proficiency: skill.proficiency || "",
                category: skill.category || ""
            })) : [],
            experience: Array.isArray(extractedData.experience) ? extractedData.experience.map(exp => ({
                role: exp.role || "",
                company: exp.company || "",
                location: exp.location || "",
                startDate: exp.startDate || "",
                endDate: exp.endDate || "",
                current: exp.current || false,
                description: Array.isArray(exp.description) ? exp.description : []
            })) : [],
            education: Array.isArray(extractedData.education) ? extractedData.education.map(edu => ({
                degree: edu.degree || "",
                institution: edu.institution || "",
                fieldOfStudy: edu.fieldOfStudy || "",
                startDate: edu.startDate || "",
                endDate: edu.endDate || "",
                gpa: edu.gpa || "",
                description: Array.isArray(edu.description) ? edu.description : []
            })) : [],
            projects: Array.isArray(extractedData.projects) ? extractedData.projects.map(proj => ({
                name: proj.name || "",
                description: proj.description || "",
                technologies: Array.isArray(proj.technologies) ? proj.technologies : [],
                link: proj.link || "",
                startDate: proj.startDate || "",
                endDate: proj.endDate || ""
            })) : [],
            certifications: Array.isArray(extractedData.certifications) ? extractedData.certifications.map(cert => ({
                name: cert.name || "",
                issuer: cert.issuer || "",
                dateIssued: cert.dateIssued || "",
                expirationDate: cert.expirationDate || "",
                credentialId: cert.credentialId || "",
                credentialUrl: cert.credentialUrl || ""
            })) : [],
            languages: Array.isArray(extractedData.languages) ? extractedData.languages.map(lang => ({
                name: lang.name || "",
                proficiency: lang.proficiency || ""
            })) : [],
            meta: {
                theme: extractedData.meta?.theme || "default",
                lastUpdated: Date.now()
            }
        };

        // Check if a portfolio already exists for the user (Avoid duplicate entries)
        const existingPortfolio = await portfolioModel.findOne({ userId: req.user._id });
        if (existingPortfolio) {
            return res.status(400).json({ success: false, error: "Portfolio already exists for this user." });
        }

        // Create and save portfolio
        const portfolio = new portfolioModel(portfolioData);
        await portfolio.save();

        return res.status(201).json({
            success: true,
            message: "Portfolio created successfully",
            data: portfolio
        });

    } catch (error) {
        console.error("Error creating portfolio:", error);

        // Handle Mongoose validation errors
        if (error.name === "ValidationError") {
            return res.status(400).json({
                success: false,
                error: "Validation Error",
                details: error.errors
            });
        }

        // Handle MongoDB duplicate entry error
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                error: "Duplicate entry",
                message: "A portfolio with this user already exists"
            });
        }

        return res.status(500).json({
            success: false,
            error: "Internal server error",
            message: error.message
        });
    }
};
