import React from 'react';

const GridGalleryFooter = () => {
  return (
    <footer className="footer grid-gallery-footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <h3 className="footer-heading grid-gallery-footer-heading">
              About Us
            </h3>
            <p className="footer-text grid-gallery-footer-text">
              Grid Gallery is a modern blog showcasing the best visual content in a responsive grid layout. Our mission is to inspire through exceptional photography and thoughtful articles.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-heading grid-gallery-footer-heading">
              Quick Links
            </h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="#" className="footer-link grid-gallery-footer-link">Home</a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link grid-gallery-footer-link">Categories</a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link grid-gallery-footer-link">Featured</a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link grid-gallery-footer-link">About</a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link grid-gallery-footer-link">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Connect */}
          <div className="footer-section">
            <h3 className="footer-heading grid-gallery-footer-heading">
              Connect With Us
            </h3>
            <div className="footer-social">
              <a href="#" className="footer-social-link grid-gallery-footer-social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="footer-social-link grid-gallery-footer-social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="footer-social-link grid-gallery-footer-social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="footer-social-link grid-gallery-footer-social-link">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
            <div className="footer-contact">
              <p>Email: contact@gridgallery.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright grid-gallery-footer-copyright">
            © 2025 Grid Gallery. All Rights Reserved.
          </div>
          <div className="footer-links">
            <a href="#" className="footer-bottom-link grid-gallery-footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link grid-gallery-footer-bottom-link">Terms of Use</a>
            <a href="#" className="footer-bottom-link grid-gallery-footer-bottom-link">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GridGalleryFooter;