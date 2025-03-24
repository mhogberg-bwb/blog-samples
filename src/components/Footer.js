import React from 'react';

const Footer = ({ categories = [], socialLinks = [] }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="blog-footer">
      <div className="blog-footer-container">
        <div className="blog-footer-content">
          <div className="blog-footer-section">
            <h3 className="blog-footer-heading">About Us</h3>
            <p className="blog-footer-text">
              Our blog delivers thought-provoking content on a variety of topics.
              We are dedicated to providing high-quality articles that inspire and inform.
            </p>
          </div>
          
          {categories.length > 0 && (
            <div className="blog-footer-section">
              <h3 className="blog-footer-heading">Categories</h3>
              <ul className="blog-footer-list">
                {categories.slice(0, 5).map((category) => (
                  <li key={category.id} className="blog-footer-item">
                    <a href={`/category/${category.slug}`} className="blog-footer-link">{category.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="blog-footer-section">
            <h3 className="blog-footer-heading">Quick Links</h3>
            <ul className="blog-footer-list">
              <li className="blog-footer-item"><a href="/about" className="blog-footer-link">About</a></li>
              <li className="blog-footer-item"><a href="/contact" className="blog-footer-link">Contact</a></li>
              <li className="blog-footer-item"><a href="/privacy-policy" className="blog-footer-link">Privacy Policy</a></li>
              <li className="blog-footer-item"><a href="/terms" className="blog-footer-link">Terms of Service</a></li>
            </ul>
          </div>
          
          {socialLinks.length > 0 && (
            <div className="blog-footer-section">
              <h3 className="blog-footer-heading">Follow Us</h3>
              <div className="blog-footer-social">
                {socialLinks.map((link) => (
                  <a 
                    key={link.platform} 
                    href={link.url} 
                    className={`blog-footer-social-link ${link.platform.toLowerCase()}`}
                    aria-label={link.platform}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="blog-footer-bottom">
          <p className="blog-footer-copyright">
            &copy; {currentYear} Blog Name. All rights reserved.
          </p>
          <div className="blog-footer-links">
            <a href="/privacy" className="blog-footer-bottom-link">Privacy</a>
            <a href="/terms" className="blog-footer-bottom-link">Terms</a>
            <a href="/sitemap" className="blog-footer-bottom-link">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;