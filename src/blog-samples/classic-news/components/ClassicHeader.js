import React, { useState } from 'react';

const ClassicHeader = ({ categories }) => {
  const [searchValue, setSearchValue] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search for:', searchValue);
    // Would handle search in a real app
  };
  
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  
  return (
    <header className="cn-header">
      <div className="cn-topbar">
        <div className="cn-topbar-container">
          <div className="cn-topbar-left">
            <span className="cn-current-date">Friday, March 21, 2025</span>
          </div>
          <div className="cn-topbar-right">
            <a href="#" className="cn-topbar-link">Subscribe</a>
            <a href="#" className="cn-topbar-link">Sign In</a>
          </div>
        </div>
      </div>
      
      <div className="cn-main-header">
        <div className="cn-main-header-container">
          <div className="cn-logo">
            <h1>The Daily Chronicle</h1>
          </div>
          
          <div className="cn-search-container">
            <form onSubmit={handleSearchSubmit} className="cn-search-form">
              <input
                type="search"
                placeholder="Search articles..."
                value={searchValue}
                onChange={handleSearchChange}
                className="cn-search-input"
              />
              <button type="submit" className="cn-search-button">
                Search
              </button>
            </form>
          </div>
          
          <button className="cn-mobile-menu-toggle" onClick={toggleMobileMenu}>
            {showMobileMenu ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      
      <nav className={`cn-navigation ${showMobileMenu ? 'cn-navigation-mobile-open' : ''}`}>
        <div className="cn-navigation-container">
          <ul className="cn-nav-items">
            <li className="cn-nav-item cn-nav-item-home">
              <a href="#" className="cn-nav-link cn-nav-link-active">Home</a>
            </li>
            
            {categories && categories.map(category => (
              <li key={category.id} className="cn-nav-item">
                <a href={`#${category.slug}`} className="cn-nav-link">
                  {category.name}
                </a>
              </li>
            ))}
            
            <li className="cn-nav-item">
              <a href="#" className="cn-nav-link">About</a>
            </li>
            <li className="cn-nav-item">
              <a href="#" className="cn-nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default ClassicHeader;