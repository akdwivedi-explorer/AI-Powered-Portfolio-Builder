import portfolioModel from "../models/portfolio.model.js";


export const createPortfolio = async (req, res) => {
    try {
        const { extractedData } = req.body; // From Gemini processing
        
        // Validate we have at least some data
        if (!extractedData || (typeof extractedData !== 'object')) {
            return res.status(400).json({
                success: false,
                error: "No valid extracted data provided"
            });
        }

        // Build portfolio data with all possible fields
        const portfolioData = {
            userId: req.user?._id || null,
            personalInfo: {
                name: extractedData.name || null,
                email: extractedData.email || null,
                phone: extractedData.phone || null,
                location: extractedData.location || null,
                website: extractedData.website || null,
                linkedin: extractedData.linkedin || null,
                github: extractedData.github || null,
                summary: extractedData.summary || null,
                profilePicture: extractedData.profilePicture || null
            },
            skills: extractedData.skills?.map(skill => ({
                name: skill.name || null,
                proficiency: skill.proficiency || null,
                category: skill.category || null
            })) || [],
            experience: extractedData.experience?.map(exp => ({
                role: exp.role || null,
                company: exp.company || null,
                location: exp.location || null,
                startDate: exp.startDate || null,
                endDate: exp.endDate || null,
                current: exp.current || null,
                description: exp.description || []
            })) || [],
            education: extractedData.education?.map(edu => ({
                degree: edu.degree || null,
                institution: edu.institution || null,
                fieldOfStudy: edu.fieldOfStudy || null,
                startDate: edu.startDate || null,
                endDate: edu.endDate || null,
                gpa: edu.gpa || null,
                description: edu.description || []
            })) || [],
            projects: extractedData.projects?.map(proj => ({
                name: proj.name || null,
                description: proj.description || null,
                technologies: proj.technologies || [],
                link: proj.link || null,
                startDate: proj.startDate || null,
                endDate: proj.endDate || null
            })) || [],
            certifications: extractedData.certifications?.map(cert => ({
                name: cert.name || null,
                issuer: cert.issuer || null,
                dateIssued: cert.dateIssued || null,
                expirationDate: cert.expirationDate || null,
                credentialId: cert.credentialId || null,
                credentialUrl: cert.credentialUrl || null
            })) || [],
            languages: extractedData.languages?.map(lang => ({
                name: lang.name || null,
                proficiency: lang.proficiency || null
            })) || [],
            meta: {
                theme: extractedData.meta?.theme || 'default',
                lastUpdated: new Date()
            }
        };

        // Create and save portfolio
        const portfolio = new portfolioModel(portfolioData);
        await portfolio.save();

        // Return success response with portfolio data
        return res.status(201).json({
            success: true,
            message: "Portfolio created successfully",
            data: portfolio
        });

    } catch (error) {
        console.error("Error creating portfolio:", error);
        
        // Handle specific error types
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                error: "Validation Error",
                details: error.errors
            });
        }

        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                error: "Duplicate entry",
                message: "A portfolio with this user already exists"
            });
        }

        // Generic error response
        return res.status(500).json({
            success: false,
            error: "Internal server error",
            message: error.message
        });
    }
};