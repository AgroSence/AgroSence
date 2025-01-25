import React from "react";
import { FiEdit2 } from "react-icons/fi";
import Layout from "../components/dashboard/Layout";
import { resource } from "../resource";

const Settings = () => {
  return (
    <Layout>
      <div className="d-flex">
        {/* Main Content */}
        <div className="flex-grow-1 overflow-auto">
          {/* Settings Content */}
          <div className=" p-4">
            <h2 className="mb-4">Settings</h2>
            <div className=" container border bg-white rounded-3 p-4">
              <h5 className="text-success mb-4" style={{textDecoration:"underline"}}>Edit Profile</h5>
              
              <div className="row">
                {/* Profile Image Column */}
                <div className="col-12 col-md-3 mb-4 mb-md-0">
                  <div className="position-relative d-inline-block">
                    <img
                      src={`${resource.Jeet.src}`}
                      alt="Profile"
                      className="rounded-circle"
                      style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "cover",
                      }}
                    />
                    <button className="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle p-2">
                      <FiEdit2 size={16} />
                    </button>
                  </div>
                </div>

                {/* Form Fields Column */}
                <div className="col-12 col-md-9">
                  <div className="row g-4">
                    {/* Input Fields */}
                    {[
                      {
                        label: "Your Name",
                        type: "text",
                        defaultValue: "Jeet Jani",
                      },
                      {
                        label: "User Name",
                        type: "text",
                        defaultValue: "Janijeet17",
                      },
                      {
                        label: "Email",
                        type: "email",
                        defaultValue: "janijeet50@gmail.com",
                      },
                      {
                        label: "Password",
                        type: "password",
                        defaultValue: "********",
                      },
                      {
                        label: "Date of Birth",
                        type: "date",
                        defaultValue: "2002-09-17",
                      },
                      {
                        label: "Present Address",
                        type: "text",
                        defaultValue: "Mehsana, Gujarat",
                      },
                      {
                        label: "Permanent Address",
                        type: "text",
                        defaultValue: "Mehsana, Gujarat",
                      },
                      { label: "City", type: "text", defaultValue: "Mehsana" },
                      { label: "Pin Code", type: "text", defaultValue: "384002" },
                      { label: "Country", type: "text", defaultValue: "IND" },
                    ].map((field, index) => (
                      <div key={index} className="col-sm-6">
                        <label className="form-label">{field.label}</label>
                        <input
                          type={field.type}
                          className="form-control"
                          defaultValue={field.defaultValue}
                        />
                      </div>
                    ))}

                    {/* Save Button */}
                    <div className="col-12 text-end">
                      <button className="btn btn-success px-4">Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;