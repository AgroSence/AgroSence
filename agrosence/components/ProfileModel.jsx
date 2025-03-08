import React from "react";
import { FaTimes } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { resource } from "../resource";

const ProfileModal = ({ onClose }) => {
  return (
    <div className="profile-modal-overlay">
      <div className="profile-modal">
        {/* Header */}
        <div className="profile-header d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              src={resource.Dhruv.src}
              alt="User"
              className="rounded-circle me-2"
              style={{ width: "50px", height: "50px" }}
            />
            <div>
              <h5 className="mb-0">Jeet Jani</h5>
              <p className="text-muted mb-0">janijeet50@gmail.com</p>
            </div>
          </div>
          <FaTimes
            className="close-icon"
            onClick={onClose}
            style={{ cursor: "pointer" }}
          />
        </div>

        {/* Profile Details */}
        <div className="profile-body">
          <div className="mb-3">
            <span className="text-muted">Name</span>
            <p className="mb-0">Jeetjani17</p>
          </div>
          <div className="mb-3">
            <span className="text-muted">Email account</span>
            <p className="mb-0">janijeet50@gmail.com</p>
          </div>
          <div className="mb-3">
            <span className="text-muted">Mobile number</span>
            <p className="mb-0">7043569445</p>
          </div>
          <div className="mb-3">
            <span className="text-muted">Location</span>
            <p className="mb-0">IND</p>
          </div>
        </div>

        {/* Save Button */}
        <button className="btn btn-success w-100">Save Changes</button>
      </div>
    </div>
  );
};

export default ProfileModal;
