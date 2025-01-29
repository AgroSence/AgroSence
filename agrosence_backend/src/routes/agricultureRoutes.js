const express = require("express");
const router = express.Router();
const agricultureFAQ = require("../data/agricultureFAQ");

// Basic keyword matching function
const findAnswer = (query) => {
  // Convert query to lowercase for case-insensitive comparison
  const queryLower = query.toLowerCase();
  
  // Find the first FAQ where the question includes any keyword from the user's query
  for (let faq of agricultureFAQ) {
    if (faq.question.toLowerCase().includes(queryLower)) {
      return faq.answer; // Return the answer if a match is found
    }
  }
  return "Sorry, I couldn't find an answer to your question."; // If no match found
};

router.get("/faq", (req, res) => {
  const query = req.query.q; // Get the query parameter 'q'
  if (query) {
    const answer = findAnswer(query); // Find the answer
    res.json({ answer: answer }); // Send the answer back
  } else {
    res.status(400).json({ error: "Please provide a question." });
  }
});

module.exports = router;
