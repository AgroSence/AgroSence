const express = require("express");
const router = express.Router();
const ContactForm = require("../models/ContactFormModel");

// ✅ GET all contact form submissions
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

// ✅ DELETE a contact by ID
router.delete("/contacts/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedContact = await ContactForm.findByIdAndDelete(id);

        if (!deletedContact) {
            return res.status(404).json({ error: "Contact not found" });
        }

        res.status(200).json({ message: "Contact deleted successfully", data: { id } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
