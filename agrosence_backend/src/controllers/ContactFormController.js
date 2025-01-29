// controllers/ContactFormController.js
const ContactForm = require('../models/ContactFormModel');

exports.submitForm = async (req, res) => {
  const { name, mobile, email, address, message } = req.body;

  // Validate input
  if (!name || !mobile || !email || !address || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const contactFormEntry = new ContactForm({
      name,
      mobile,
      email,
      address,
      message
    });

    // Save to database
    await contactFormEntry.save();

    return res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
