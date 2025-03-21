import React from 'react';

const CardBasedFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer card-based-footer">
      <div className="footer-container card-based-footer-container">
        <div className="footer-content card-based-footer-content">
          <div className="footer-section footer-about card-based-footer-about">
            <h4 className="footer-heading card-based-footer-heading">About Card Blog</h4>
            <p className="footer-text card-based-footer-text">
              Card Blog showcases content in an organized, visual format that's easy to browse.
              Our card-based layout makes it simple to discover and engage with the content
              that matters most to you.
            </p>
          </div>
          
          <div className="footer-section footer-connect card-based-footer-connect">
            <h4 className="footer-heading card-based-footer-heading">Connect With Us</h4>
            <div className="footer-social card-based-footer-social">
              <a href="https://facebook.com" className="footer-social-link card-based-footer-social-link" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="footer-social-link card-based-footer-social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="footer-social-link card-based-footer-social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" className="footer-social-link card-based-footer-social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <div className="footer-contact card-based-footer-contact">
              <p>Email: hello@cardblog.com</p>
              <p>Phone: (555) 456-7890</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom card-based-footer-bottom">
          <div className="footer-copyright card-based-footer-copyright">
            &copy; {currentYear} Card Blog. All rights reserved.
          </div>
          <div className="footer-links card-based-footer-links">
            <a href="/privacy" className="footer-bottom-link card-based-footer-bottom-link">Privacy Policy</a>
            <a href="/terms" className="footer-bottom-link card-based-footer-bottom-link">Terms of Service</a>
            <a href="/cookies" className="footer-bottom-link card-based-footer-bottom-link">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CardBasedFooter;