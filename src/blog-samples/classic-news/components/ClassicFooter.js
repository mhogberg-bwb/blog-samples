import React from 'react';

const ClassicFooter = ({ categories }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="cn-footer">
      <div className="cn-footer-container">
        <div className="cn-footer-content">
          <div className="cn-footer-section cn-footer-about">
            <h4 className="cn-footer-heading">About The Daily Chronicle</h4>
            <p className="cn-footer-text">
              The Daily Chronicle is a trusted source for news, analysis, and 
              insights across a wide range of topics. We are dedicated to 
              providing our readers with accurate, in-depth coverage of the 
              stories that matter.
            </p>
          </div>
          
          <div className="cn-footer-section cn-footer-categories">
            <h4 className="cn-footer-heading">Categories</h4>
            <ul className="cn-footer-category-list">
              {categories.map(category => (
                <li key={category.id} className="cn-footer-category-item">
                  <a href={`#${category.slug}`} className="cn-footer-category-link">
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="cn-footer-section cn-footer-connect">
            <h4 className="cn-footer-heading">Connect With Us</h4>
            <div className="cn-footer-social">
              <a href="#" className="cn-footer-social-link">Facebook</a>
              <a href="#" className="cn-footer-social-link">Twitter</a>
              <a href="#" className="cn-footer-social-link">Instagram</a>
              <a href="#" className="cn-footer-social-link">LinkedIn</a>
            </div>
            <div className="cn-footer-contact">
              <p>Email: contact@dailychronicle.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </div>
        </div>
        
        <div className="cn-footer-bottom">
          <div className="cn-footer-copyright">
            &copy; {currentYear} The Daily Chronicle. All rights reserved.
          </div>
          <div className="cn-footer-links">
            <a href="#" className="cn-footer-bottom-link">Privacy Policy</a>
            <a href="#" className="cn-footer-bottom-link">Terms of Service</a>
            <a href="#" className="cn-footer-bottom-link">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ClassicFooter;