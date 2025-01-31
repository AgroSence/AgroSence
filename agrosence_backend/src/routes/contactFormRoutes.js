const express = require("express");
const router = express.Router(); // ✅ Define the router

const ContactForm = require("../models/ContactFormModel");

// GET all contact form submissions
router.get("/contacts", async (req, res) => {
    try {
        const contacts = await ContactForm.find();
        const totalCount = await ContactForm.countDocuments();

        res.set("Content-Range", `contacts 0-${contacts.length}/${totalCount}`);
        res.set("Access-Control-Expose-Headers", "Content-Range");

        res.status(200).json({
            data: contacts.map(contact => ({
                id: contact._id, // ✅ Convert _id to id
                name: contact.name,
                mobile: contact.mobile,
                email: contact.email,
                address: contact.address,
                message: contact.message,
                dateSubmitted: contact.dateSubmitted
            })),
            total: totalCount, // ✅ Include total count
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// ✅ Export the router
module.exports = router;
