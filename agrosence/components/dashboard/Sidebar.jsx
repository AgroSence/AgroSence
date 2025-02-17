import { useState } from "react";
import { Link } from "react-router-dom";
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
  return (
    <>
      {/* Sidebar */}
      <div
        className="sidebar bg-white border-end h-100 position-fixed d-none d-lg-block"
        style={{ width: "250px", zIndex: 1045 }}
      >
        <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
          <h3 className="m-0" style={{fontFamily:"martel"}}>AgroSence</h3>
        </div>

        <div
          className="p-3 sidebar-content overflow-auto"
          style={{ height: "calc(100vh - 71px)" }}
        >
          <div className="mb-4">
            <Link
              to="/Dashboard"
              className="d-flex align-items-center text-decoration-none text-success p-2 bg-success bg-opacity-10 rounded"
            >
              <BsGrid1X2Fill className="me-3" />
              <span>Dashboard</span>
            </Link>
          </div>

          <div className="mb-2">
            <Link
              to="/UserHistory"
              className="d-flex align-items-center text-decoration-none text-secondary p-2"
            >
              <BsClock className="me-3" />
              <span>User History</span>
            </Link>
          </div>

          <div className="mb-2">
            <Link
              to="/Bookmarks"
              className="d-flex align-items-center text-decoration-none text-secondary p-2"
            >
              <BsBookmark className="me-3" />
              <span>Bookmarks / Collection</span>
            </Link>
          </div>

          <div className="mb-2">
            <Link
              to="/AppUsage"
              className="d-flex align-items-center text-decoration-none text-secondary p-2"
            >
              <BsBarChart className="me-3" />
              <span>Analytic of App Usage</span>
            </Link>
          </div>

          <div className="mb-2">
            <Link
              to="/Reports"
              className="d-flex align-items-center text-decoration-none text-secondary p-2"
            >
              <BsFileText className="me-3" />
              <span>Farming Report</span>
            </Link>
          </div>

          <div className="mb-2">
            <Link
              to="/Reports"
              className="d-flex align-items-center text-decoration-none text-secondary p-2"
            >
              <BsBox className="me-3" />
              <span>Farming Routine</span>
            </Link>
          </div>

          <div className="mb-4">
            <Link
              to="/QuickSupport"
              className="d-flex align-items-center text-decoration-none text-secondary p-2"
            >
              <BsLifePreserver className="me-3" />
              <span>Quick Support / Feedback</span>
            </Link>
          </div>

          <div className="border-top pt-4">
            <small className="text-muted px-2 fw-bold">Access Other Features</small>

            <div className="mt-2">
              <Link
                to="/Home"
                className="d-flex align-items-center text-decoration-none text-secondary p-2"
              >
                <BsHouseFill className="me-3" />
                <span>Home</span>
              </Link>
            </div>

            <div className="mb-2">
              <Link
                to="/Feature"
                className="d-flex align-items-center text-decoration-none text-secondary p-2"
              >
                <BsTools className="me-3" />
                <span>Features</span>
              </Link>
            </div>

            <div className="mb-2">
              <Link
                to="/ContactUs"
                className="d-flex align-items-center text-decoration-none text-secondary p-2"
              >
                <BsPhoneFill className="me-3" />
                <span>Contact</span>
              </Link>
            </div>

            <div className="mb-2">
              <Link
                to="/Setting"
                className="d-flex align-items-center text-decoration-none text-secondary p-2"
              >
                <BsGearFill className="me-3" />
                <span>Settings</span>
              </Link>
            </div>
          </div>

          <div className="border-top pt-4">
            <div className="mb-2">
              <Link
                to="/"
                className="d-flex align-items-center text-decoration-none text-secondary p-2"
              >
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
              // value={searchQuery}
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
            <Link
              to="/Dashboard"
              className="d-flex align-items-center text-decoration-none text-success p-2 bg-success bg-opacity-10 rounded"
            >
              <BsGrid1X2Fill className="me-3" />
              <span>Dashboard</span>
            </Link>
          </div>

          <div className="mb-2">
            <Link
              to="/UserHistory"
              className="d-flex align-items-center text-decoration-none text-secondary p-2"
            >
              <BsClock className="me-3" />
              <span>User History</span>
            </Link>
          </div>

          <div className="mb-2">
            <Link
              to="/Bookmarks"
              className="d-flex align-items-center text-decoration-none text-secondary p-2"
            >
              <BsBookmark className="me-3" />
              <span>Bookmarks / Collection</span>
            </Link>
          </div>

          <div className="mb-2">
            <Link
              to="/AppUsage"
              className="d-flex align-items-center text-decoration-none text-secondary p-2"
            >
              <BsBarChart className="me-3" />
              <span>Analytic of App Usage</span>
            </Link>
          </div>

          <div className="mb-2">
            <Link
              to="/Reports"
              className="d-flex align-items-center text-decoration-none text-secondary p-2"
            >
              <BsFileText className="me-3" />
              <span>Farming Report</span>
            </Link>
          </div>

          <div className="mb-2">
            <Link
              to="/Reports"
              className="d-flex align-items-center text-decoration-none text-secondary p-2"
            >
              <BsBox className="me-3" />
              <span>Farming Routine</span>
            </Link>
          </div>

          <div className="mb-4">
            <Link
              to="/QuickSupport"
              className="d-flex align-items-center text-decoration-none text-secondary p-2"
            >
              <BsLifePreserver className="me-3" />
              <span>Quick Support / Feedback</span>
            </Link>
          </div>

          <div className="border-top pt-4">
            <small className="text-muted px-2 fw-bold">Access Other Features</small>

            <div className="mt-2">
              <Link
                to="/Home"
                className="d-flex align-items-center text-decoration-none text-secondary p-2"
              >
                <BsHouseFill className="me-3" />
                <span>Home</span>
              </Link>
            </div>

            <div className="mb-2">
              <Link
                to="/Feature"
                className="d-flex align-items-center text-decoration-none text-secondary p-2"
              >
                <BsTools className="me-3" />
                <span>Features</span>
              </Link>
            </div>

            <div className="mb-2">
              <Link
                to="/ContactUs"
                className="d-flex align-items-center text-decoration-none text-secondary p-2"
              >
                <BsPhoneFill className="me-3" />
                <span>Contact</span>
              </Link>
            </div>

            <div className="mb-2">
              <Link
                to="/Setting"
                className="d-flex align-items-center text-decoration-none text-secondary p-2"
              >
                <BsGearFill className="me-3" />
                <span>Settings</span>
              </Link>
            </div>

            <div className="mb-2">
              <Link
                to="/"
                className="d-flex align-items-center text-decoration-none text-secondary p-2"
              >
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
