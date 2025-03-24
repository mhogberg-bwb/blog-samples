import React from 'react';

const Header = ({ title, subtitle, categories = [] }) => {
  return (
    <header className="blog-header">
      <div className="blog-header-container">
        <div className="blog-logo">
          <h1 className="blog-title">{title}</h1>
          {subtitle && <p className="blog-subtitle">{subtitle}</p>}
        </div>
        
        {/* {categories.length > 0 && (
          <nav className="blog-categories">
            <ul className="blog-category-list">
              {categories.map((category) => (
                <li key={category.id} className="blog-category-item">
                  <a href={`/category/${category.slug}`} className="blog-category-link">
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
        
        <div className="blog-header-actions">
          <div className="blog-search">
            <input type="text" placeholder="Search..." className="blog-search-input" />
            <button type="submit" className="blog-search-button">
              <span className="search-icon">🔍</span>
            </button>
          </div>
        </div> */}
      </div>
    </header>
  );
};

export default Header;