const ProfileForm = ({ formData, handleChange, handleSubmit }) => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="row g-4">
          {/* Name Fields */}
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                className="form-control"
                name="yourName"
                value={formData.yourName}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label className="form-label">User Name</label>
              <input
                type="text"
                className="form-control"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                placeholder="Enter username"
              />
            </div>
          </div>
  
          {/* Email & Password Fields */}
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••••"
              />
            </div>
          </div>
  
          {/* Date of Birth & Present Address Fields */}
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label className="form-label">Date of Birth</label>
              <input
                type="date"
                className="form-control"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label className="form-label">Present Address</label>
              <input
                type="text"
                className="form-control"
                name="presentAddress"
                value={formData.presentAddress}
                onChange={handleChange}
                placeholder="Enter present address"
              />
            </div>
          </div>
  
          {/* Permanent Address & City Fields */}
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label className="form-label">Permanent Address</label>
              <input
                type="text"
                className="form-control"
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={handleChange}
                placeholder="Enter permanent address"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
              />
            </div>
          </div>
  
          {/* Pin Code & Country Fields */}
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label className="form-label">Pin Code</label>
              <input
                type="text"
                className="form-control"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                placeholder="Enter pin code"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label className="form-label">Country</label>
              <input
                type="text"
                className="form-control"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Enter country"
              />
            </div>
          </div>
  
          {/* Submit Button */}
          <div className="col-12 text-end">
            <button type="submit" className="btn btn-success px-4">
              Save
            </button>
          </div>
        </div>
      </form>
    );
  };
  
  export default ProfileForm;
  