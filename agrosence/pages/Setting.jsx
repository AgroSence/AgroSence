import { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/DashHeader";
import ProfileImage from "../components/usersetting/ProfileImage";
import ProfileForm from "../components/usersetting/ProfileForm";

const Settings = () => {
  const [formData, setFormData] = useState({
    yourName: "Jeet Jani",
    userName: "Janijeet17",
    email: "janijeet50@gmail.com",
    password: "••••••••••",
    dateOfBirth: "2002-09-17",
    presentAddress: "Mehsana, Gujarat",
    permanentAddress: "Mehsana, Gujarat",
    city: "Mehsana",
    pinCode: "384002",
    country: "IND",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    console.log("Image changed:", e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="d-flex min-vh-100">
      {/* Static Sidebar */}
      <Sidebar className="position-fixed vh-100" />

      {/* Scrollable Content */}
      <div className="flex-grow-1 overflow-auto" style={{ marginLeft: "250px" }}>
        <Header />

        <div className="p-3 p-lg-4">
          <h4 className="mb-4">Settings</h4>

          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <ul className="nav nav-tabs mb-4">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Edit Profile
                  </a>
                </li>
              </ul>

              {/* Profile Image */}
              <div className="text-center">
                <ProfileImage
                  imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Setting%20(Dashboard)-aFUjAYGO1eNlwR7CBjIuQQSqbjtMUe.png"
                  onImageChange={handleImageChange}
                />
              </div>

              {/* Profile Form */}
              <ProfileForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
