import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const location = useLocation();

  const trackScreenWidth = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
    if (width > 600) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    if (screenWidth < 600) {
      setOpen(false);
    }
  };

  useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="logo ">
          <Link to="/">
            <img 
              src="logo-ram.png"
              alt="brand"
            />
          </Link>
        </div>
        <div className="list-wrapper">
          <img
            src="https://github.com/DwinaTech/public-images/blob/main/menu-bars.png?raw=true"
            alt="Menu bars"
            style={{ opacity: !open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />
          <img
            src="https://github.com/DwinaTech/public-images/blob/main/cross-menu-icon.png?raw=true"
            alt="Menu cross"
            style={{ opacity: open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />

          <ul style={{ left: open ? "0" : "-100vw" }}>
            <li>
              <Link
                to="/"
                onClick={handleClose}
                style={{ color: location.pathname === "/" && "#DCA704" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={handleClose}
                style={{ color: location.pathname === "/about" && "#DCA704" }}
              >
                About
                </Link>
            </li>
            <li>
              <Link
                to="/experience"
                onClick={handleClose}
                style={{ color: location.pathname === "/experience" && "#DCA704" }}
              >
                Experience

              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                onClick={handleClose}
                style={{ color: location.pathname === "/skills" && "#DCA704" }}
              >
                Skills

                </Link>
            </li>
            <li>
              <Link
                to="/interest"
                onClick={handleClose}
                style={{ color: location.pathname === "/interest" && "#DCA704" }}
              >
                Interest

                </Link>
            </li>
            <li>
              <Link
                to="/awards"
                onClick={handleClose}
                style={{ color: location.pathname === "/awards" && "#DCA704" }}
              >
                Awards

              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
