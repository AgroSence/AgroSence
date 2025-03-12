const ResourceHeader = () => {
    return (
      <div className="hero-banner position-relative">
        <div
          className="banner-image w-100"
          style={{
            backgroundImage:
              'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Resource%20Page.png-gbUJP5jqh5mPm7Dkjbil4oly6y1x7d.jpeg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "300px",
            position: "relative",
          }}
        >
          <div
            className="overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
          ></div>
          <div
            className="banner-content position-absolute text-white text-center"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
              width: "100%",
            }}
          >
            <h1 className="display-3 fw-bold">Resources</h1>
          </div>
        </div>
      </div>
    )
  }
  
  export default ResourceHeader
  
  