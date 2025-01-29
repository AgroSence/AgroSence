import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false); // Track submission status
  const [loading, setLoading] = useState(false); // Track form submission loading

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("http://localhost:5000/api/contact/submit", formData);
      setSubmitted(true); // Show success animation
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5">
      {submitted ? (
        // Animated Success Message
        <motion.div
          className="text-center p-4 bg-light rounded shadow"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Animated Tick Mark */}
          <motion.div
            className="text-success"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="currentColor"
              className="bi bi-check-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-4.97-2.97a.75.75 0 0 0-1.08 0L7.5 7.44l-1.47-1.47a.75.75 0 0 0-1.08 1.06l2 2a.75.75 0 0 0 1.08 0l4-4a.75.75 0 0 0 0-1.06z" />
            </svg>
          </motion.div>
          <h2 className="mt-3">Successfully Sent!</h2>
          <p>Thank you for reaching out. We will get back to you soon.</p>
        </motion.div>
      ) : (
        // Contact Form
        <form onSubmit={handleSubmit}>
          <div className="row g-4">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label fw-bold">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" onChange={handleChange} required />
            </div>
            <div className="col-md-6">
              <label htmlFor="mobile" className="form-label fw-bold">Mobile no</label>
              <input type="tel" className="form-control" id="mobile" placeholder="Enter your mobile number" onChange={handleChange} required />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label fw-bold">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={handleChange} required />
            </div>
            <div className="col-md-6">
              <label htmlFor="address" className="form-label fw-bold">Address</label>
              <input type="text" className="form-control" id="address" placeholder="Enter your address" onChange={handleChange} required />
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label fw-bold">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Enter your message" onChange={handleChange} required></textarea>
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-dark px-4 py-2" style={{ borderRadius: "10px" }} disabled={loading}>
                {loading ? "Submitting..." : "Submit Response"}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
