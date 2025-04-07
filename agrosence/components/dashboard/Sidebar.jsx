import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BsGrid1X2Fill,
  BsBox,
  BsBookmark,
  BsBarChart,
  BsFileText,
  BsClock,
  BsLifePreserver,
  BsHouseFill,
  BsGearFill,
  BsPhoneFill,
  BsTools,
  BsSearch,
  BsBoxArrowRight,
  BsX,
} from "react-icons/bs";

const Sidebar = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const linkClass = (path) =>
    `d-flex align-items-center text-decoration-none p-2 rounded ${
      location.pathname === path
        ? "text-success bg-success bg-opacity-10"
        : "text-secondary"
    }`;

  return (
    <>
      {/* Sidebar */}
      <div
        className="sidebar bg-white border-end h-100 position-fixed d-none d-lg-block"
        style={{ width: "250px", zIndex: 1045 }}
      >
        <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
          <h3 className="m-0" style={{ fontFamily: "martel" }}>AgroSence</h3>
        </div>

        <div
          className="p-3 sidebar-content overflow-auto"
          style={{ height: "calc(100vh - 71px)" }}
        >
          <div className="mb-4">
            <Link to="/Dashboard" className={linkClass("/Dashboard")}>
              <BsGrid1X2Fill className="me-3" />
              <span>Dashboard</span>
            </Link>
          </div>

          <div className="mb-2">
            <Link to="/CropSell" className={linkClass("/CropSell")}>
              <BsBarChart className="me-3" />
              <span>Crop Sell</span>
            </Link>
          </div>

          <div className="mb-2">
            <Link to="/OrderHistory" className={linkClass("/OrderHistory")}>
              <BsClock className="me-3" />
              <span>User History</span>
            </Link>
          </div>

          <div className="mb-2">
            <Link to="/Bookmarks" className={linkClass("/Bookmarks")}>
              <BsBookmark className="me-3" />
              <span>Bookmarks / Collection</span>
            </Link>
          </div>

          <div className="mb-2">
            <Link to="/Reports" className={linkClass("/Reports")}>
              <BsFileText className="me-3" />
              <span>Farming Report</span>
            </Link>
          </div>

          <div className="mb-2">
            <Link to="/Routine" className={linkClass("/Routine")}>
              <BsBox className="me-3" />
              <span>Farming Routine</span>
            </Link>
          </div>

          <div className="mb-4">
            <Link to="/QuickSupport" className={linkClass("/QuickSupport")}>
              <BsLifePreserver className="me-3" />
              <span>Quick Support / Feedback</span>
            </Link>
          </div>

          <div className="border-top pt-4">
            <small className="text-muted px-2 fw-bold">Access Other Features</small>

            <div className="mt-2">
              <Link to="/Home" className={linkClass("/Home")}>
                <BsHouseFill className="me-3" />
                <span>Home</span>
              </Link>
            </div>

            <div className="mb-2">
              <Link to="/Feature" className={linkClass("/Feature")}>
                <BsTools className="me-3" />
                <span>Features</span>
              </Link>
            </div>

            <div className="mb-2">
              <Link to="/ContactUs" className={linkClass("/ContactUs")}>
                <BsPhoneFill className="me-3" />
                <span>Contact</span>
              </Link>
            </div>

            <div className="mb-2">
              <Link to="/Setting" className={linkClass("/Setting")}>
                <BsGearFill className="me-3" />
                <span>Settings</span>
              </Link>
            </div>
          </div>

          <div className="border-top pt-4">
            <div className="mb-2">
              <Link to="/" className={linkClass("/")}>
                <BsBoxArrowRight className="me-3" />
                <span>Logout</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className="sidebar bg-white border-end position-fixed start-0 top-0 h-100 d-lg-none"
        style={{
          width: "250px",
          zIndex: 1045,
          transform: "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
          <h3 className="m-0">AgroSence</h3>
          <button className="btn btn-link d-lg-none p-0 text-dark">
            <BsX size={24} />
          </button>
        </div>

        <div className="p-3">
          <div className="input-group">
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
              <BsSearch />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                backgroundColor: "#F2F4F8",
                borderTopRightRadius: "25px",
                borderBottomRightRadius: "25px",
                border: "1px solid #ccc",
                borderLeft: "none",
              }}
            />
          </div>
        </div>

        <div
          className="p-3 sidebar-content overflow-auto"
          style={{ height: "calc(100vh - 71px)" }}
        >
          <div className="mb-4">
            <Link to="/Dashboard" className={linkClass("/Dashboard")}>
              <BsGrid1X2Fill className="me-3" />
              <span>Dashboard</span>
            </Link>
          </div>

          <div className="mb-2">
            <Link to="/OrderHistory" className={linkClass("/OrderHistory")}>
              <BsClock className="me-3" />
              <span>User History</span>
            </Link>
          </div>

          <div className="mb-2">
            <Link to="/Bookmarks" className={linkClass("/Bookmarks")}>
              <BsBookmark className="me-3" />
              <span>Bookmarks / Collection</span>
            </Link>
          </div>

          <div className="mb-2">
            <Link to="/AppUsage" className={linkClass("/AppUsage")}>
              <BsBarChart className="me-3" />
              <span>Analytic of App Usage</span>
            </Link>
          </div>

          <div className="mb-2">
            <Link to="/Reports" className={linkClass("/Reports")}>
              <BsFileText className="me-3" />
              <span>Farming Report</span>
            </Link>
          </div>

          <div className="mb-2">
            <Link to="/Routine" className={linkClass("/Routine")}>
              <BsBox className="me-3" />
              <span>Farming Routine</span>
            </Link>
          </div>

          <div className="mb-4">
            <Link to="/QuickSupport" className={linkClass("/QuickSupport")}>
              <BsLifePreserver className="me-3" />
              <span>Quick Support / Feedback</span>
            </Link>
          </div>

          <div className="border-top pt-4">
            <small className="text-muted px-2 fw-bold">Access Other Features</small>

            <div className="mt-2">
              <Link to="/Home" className={linkClass("/Home")}>
                <BsHouseFill className="me-3" />
                <span>Home</span>
              </Link>
            </div>

            <div className="mb-2">
              <Link to="/Feature" className={linkClass("/Feature")}>
                <BsTools className="me-3" />
                <span>Features</span>
              </Link>
            </div>

            <div className="mb-2">
              <Link to="/ContactUs" className={linkClass("/ContactUs")}>
                <BsPhoneFill className="me-3" />
                <span>Contact</span>
              </Link>
            </div>

            <div className="mb-2">
              <Link to="/Setting" className={linkClass("/Setting")}>
                <BsGearFill className="me-3" />
                <span>Settings</span>
              </Link>
            </div>

            <div className="mb-2">
              <Link to="/" className={linkClass("/")}>
                <BsBoxArrowRight className="me-3" />
                <span>Logout</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
