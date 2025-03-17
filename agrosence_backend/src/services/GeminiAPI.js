require("dotenv").config();
const axios = require("axios");

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

const getGeminiResponse = async (userMessage) => {
    try {
        const response = await axios.post(
            `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
            {
                contents: [{ parts: [{ text: userMessage }] }],
            },
            {
                headers: { "Content-Type": "application/json" },
            }
        );

        const botReply = response.data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm not sure how to respond to that.";
        return botReply;
    } catch (error) {
        console.error("Error in Gemini API:", error.response?.data || error.message);
        return "Sorry, I couldn't process your request.";
    }
};

module.exports = getGeminiResponse;
