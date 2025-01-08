import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { resource } from '../resource';

const Footer = () => {
  return (
    <footer className="text-white py-4 mt-auto"
    style={{backgroundColor: "#252525"}}>
      <div className="container">
        {/* App Name */}
        <div className="row mb-3">
          <div className="col-12 text-center">
            <div className="d-flex align-items-center justify-content-center">
               <img
                          src={resource.Logo2.src} // Replace with your actual logo path
                          alt={resource.Logo2.alt} // Replace with your actual logo alt text
                          className="rounded-circle me-2"
                          style={{ width: "48px", height: "auto" }}
                        />
              <span className="logoname fs-4" style={{color:"#525151"}}>AgroSense</span>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="row mb-3">
          <div className="col-12 text-center">
            <div className="d-flex justify-content-center gap-4">
              <a href="#" className="text-white text-decoration-none">Help center</a>
              <a href="#" className="text-white text-decoration-none">Get in Touch</a>
              <a href="#" className="text-white text-decoration-none">Privacy policy</a>
              <a href="#" className="text-white text-decoration-none">Blog</a>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="row mb-3">
          <div className="col-12 text-center">
            <div className="d-flex justify-content-center gap-3">
              <a href="#" className="text-white">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row">
          <div className="col-12 text-center">
            <small>© 2025 Team AgroSense. All rights reserved</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
