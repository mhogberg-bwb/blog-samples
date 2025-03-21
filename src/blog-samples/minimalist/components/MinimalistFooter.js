import React from 'react';

const MinimalistFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer minimalist-footer">
      <div className="footer-container minimalist-footer-container">
        <div className="footer-content minimalist-footer-content">
          <div className="footer-section footer-about minimalist-footer-about">
            <h4 className="footer-heading minimalist-footer-heading">About Minimalist</h4>
            <p className="footer-text minimalist-footer-text">
              Minimalist is dedicated to providing thoughtful, long-form content 
              with a focus on clarity and simplicity. We believe in the power of 
              well-crafted storytelling without distractions.
            </p>
          </div>
          
          <div className="footer-section footer-connect minimalist-footer-connect">
            <h4 className="footer-heading minimalist-footer-heading">Connect With Us</h4>
            <div className="footer-social minimalist-footer-social">
              <a href="https://facebook.com" className="footer-social-link minimalist-footer-social-link" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="footer-social-link minimalist-footer-social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="footer-social-link minimalist-footer-social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" className="footer-social-link minimalist-footer-social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <div className="footer-contact minimalist-footer-contact">
              <p>Email: hello@minimalist.com</p>
              <p>Phone: (555) 987-6543</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom minimalist-footer-bottom">
          <div className="footer-copyright minimalist-footer-copyright">
            &copy; {currentYear} Minimalist. All rights reserved.
          </div>
          <div className="footer-links minimalist-footer-links">
            <a href="/privacy" className="footer-bottom-link minimalist-footer-bottom-link">Privacy Policy</a>
            <a href="/terms" className="footer-bottom-link minimalist-footer-bottom-link">Terms of Service</a>
            <a href="/cookies" className="footer-bottom-link minimalist-footer-bottom-link">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MinimalistFooter;