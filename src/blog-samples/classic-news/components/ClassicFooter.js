import React from 'react';

const ClassicFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-about">
            <h4 className="footer-heading">About The Daily Chronicle</h4>
            <p className="footer-text">
              The Daily Chronicle is a trusted source for news, analysis, and 
              insights across a wide range of topics. We are dedicated to 
              providing our readers with accurate, in-depth coverage of the 
              stories that matter.
            </p>
          </div>
          
          <div className="footer-section footer-connect">
            <h4 className="footer-heading">Connect With Us</h4>
            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="footer-social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="footer-social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="footer-social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <div className="footer-contact">
              <p>Email: contact@dailychronicle.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {currentYear} The Daily Chronicle. All rights reserved.
          </div>
          <div className="footer-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
            <a href="#" className="footer-bottom-link">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ClassicFooter;