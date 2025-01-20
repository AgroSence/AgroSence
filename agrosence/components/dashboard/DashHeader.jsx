import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BsBell, BsPersonCircle, BsList } from "react-icons/bs";

const Header = ({ toggleSidebar }) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
    const sidebar = document.querySelector(".sidebar.d-lg-none");
    if (sidebar) {
      sidebar.style.transform = isMobileSidebarOpen
        ? "translateX(-100%)"
        : "translateX(0)";
    }
  };

  return (
    <div className="header bg-white border-bottom p-3">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Sidebar Toggle for Mobile */}
          <div className="col-auto d-flex align-items-center">
            <button
              className="btn btn-light me-2 d-lg-none"
              onClick={toggleMobileSidebar}
            >
              <BsList size={20} />
            </button>

            {/* Search Form for Desktop */}
            <form className="d-none d-lg-flex align-items-center">
              <div className="input-group" style={{ maxWidth: "400px" }}>
                <span
                  className="input-group-text text-muted fs-5"
                  style={{
                    backgroundColor: "#F2F4F8",
                    borderTopLeftRadius: "25px",
                    borderBottomLeftRadius: "25px",
                    border: "1px solid #ccc",
                    borderRight: "none",
                  }}
                >
                  <FaSearch />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                  style={{
                    backgroundColor: "#F2F4F8",
                    borderTopRightRadius: "25px",
                    borderBottomRightRadius: "25px",
                    border: "1px solid #ccc",
                    borderLeft: "none",
                  }}
                />
              </div>
            </form>
          </div>

          {/* Right-side Elements */}
          <div className="col d-flex justify-content-end align-items-center">
            {/* Notifications */}
            <div className="position-relative me-3">
              <BsBell className="text-muted fs-5" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                6
              </span>
            </div>

            {/* User Info */}
            <div className="d-flex align-items-center">
              <BsPersonCircle className="me-2 fs-4" />
              <div className="d-none d-sm-block">
                <div className="fw-bold">Jeet Jani</div>
                <small className="text-muted">Admin</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
