const ContactForm = () => {
    const handleSubmit = (e) => {
      e.preventDefault()
      // Handle form submission
    }
  
    return (
      <div className="container my-5">
        <form onSubmit={handleSubmit}>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="name" className="form-label fw-bold">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="mobile" className="form-label fw-bold">Mobile no</label>
                <input
                  type="tel"
                  className="form-control"
                  id="mobile"
                  placeholder="Enter your mobile number"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="email" className="form-label fw-bold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="address" className="form-label fw-bold">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Enter your address"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="message" className="form-label fw-bold">Messages</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Enter your message"
                ></textarea>
              </div>
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-dark px-4 py-2" style={{borderRadius:"10px"}}>
                Submit Response
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
  
  export default ContactForm
  
  