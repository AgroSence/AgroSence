import { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { BsBell, BsList } from "react-icons/bs";
import ProfileModal from "../../components/ProfileModel";

const Header = ({ toggleSidebar }) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const userId = localStorage.getItem("userId");

        if (!token || !userId) {
          console.error("No auth token or user ID found");
          return;
        }

        const response = await axios.get(`http://localhost:5000/api/auth/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchUserProfile();
  }, []);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
    const sidebar = document.querySelector(".sidebar.d-lg-none");
    if (sidebar) {
      sidebar.style.transform = isMobileSidebarOpen ? "translateX(-100%)" : "translateX(0)";
    }
  };

  return (
    <>
      <div className="header bg-white border-bottom p-3">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Sidebar Toggle for Mobile */}
            <div className="col-auto d-flex align-items-center">
              <button className="btn btn-light me-2 d-lg-none" onClick={toggleMobileSidebar}>
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
                {/* Logged-in User Name */}

                {/* User Profile Icon */}
                <FaUserCircle
                  className="me-2 rounded-circle"
                  style={{ fontSize: "2.5rem", cursor: "pointer" }}
                  onClick={() => setShowProfile(true)}
                />
                <span className="text-muted">{user?.name || "Guest"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showProfile && <ProfileModal onClose={() => setShowProfile(false)} />}
    </>
  );
};

export default Header;