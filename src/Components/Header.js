import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    document.body.classList.toggle("mobile-nav-active");
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    document.body.classList.remove("mobile-nav-active");
    setIsMenuOpen(false);
  };

  return (
    <>
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a href="#hero" className="logo d-flex align-items-center">
            <h1 className="sitename" style={{ border: "2px solid white", padding: "2px" }}>
              KA2 Girmay-Tesfay
            </h1>
          </a>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li><a href="#hero" className="active" onClick={handleCloseMenu}>Home</a></li>
              <li><a href="#get-started" onClick={handleCloseMenu}>About</a></li>
              <li><a href="#services" onClick={handleCloseMenu}>Services</a></li>
              <li><a href="#projects" onClick={handleCloseMenu}>Products</a></li>
              <li><a href="#exports" onClick={handleCloseMenu}>Exports</a></li>
              <li><a href="#recent-blog-posts" onClick={handleCloseMenu}>Gallery</a></li>
              <li><a href="#suppliers" onClick={handleCloseMenu}>Suppliers</a></li>
              <li><a href="#contact" onClick={handleCloseMenu}>Contact</a></li>
            </ul>

            {/* Mobile nav toggle button */}
            <i
              className={`mobile-nav-toggle d-xl-none bi ${isMenuOpen ? "bi-x" : "bi-list"}`}
              onClick={handleToggle}
            />
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
