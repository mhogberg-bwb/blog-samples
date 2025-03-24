import React, { useState, useEffect } from 'react';
import { DataProvider } from './utils/DataContext';
import BlogLayout from './components/BlogLayout';
import './styles/App.css';
import './styles/base-styles.css';

function App() {
  const [activeTheme, setActiveTheme] = useState('classic-news');
    
  // Load theme CSS when activeTheme changes
  useEffect(() => {
    // Update the body class for additional theme styling
    document.body.className = `theme-${activeTheme}`;
    
    // Function to load a single theme CSS file
    const loadThemeCSS = (themeName) => {
      // Check if there's already a theme link element
      const existingThemeLink = document.getElementById('theme-stylesheet');
      const themePath = `/blog-samples/styles/themes/${themeName}.css`;
      
      if (existingThemeLink) {
        // If it exists, just update its href attribute
        existingThemeLink.href = themePath;
      } else {
        // If it doesn't exist, create a new link element
        const linkElement = document.createElement('link');
        linkElement.id = 'theme-stylesheet';
        linkElement.rel = 'stylesheet';
        linkElement.type = 'text/css';
        linkElement.href = themePath;
        
        // Append it to the document head
        document.head.appendChild(linkElement);
      }
      
      console.log(`Theme switched to: ${themeName}`);
    };
    
    // Load the active theme
    loadThemeCSS(activeTheme);
    
  }, [activeTheme]);
  
  const blogThemes = [
    { id: 'classic-news', name: 'Classic News' },
    { id: 'minimalist', name: 'Minimalist' },
    { id: 'card-based', name: 'Card-Based' },
    { id: 'grid-gallery', name: 'Grid Gallery' },
    { id: 'magazine', name: 'Magazine' },
    { id: 'tech-blog', name: 'Tech Blog' },
    { id: 'personal-journal', name: 'Personal Journal' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'creative-portfolio', name: 'Creative Portfolio' },
    { id: 'longform-reading', name: 'Longform Reading' },
    { id: 'video-centric', name: 'Video Centric' },
    { id: 'podcast-audio', name: 'Podcast & Audio' }
  ];
  
  const handleThemeChange = (themeId) => {
    console.log("Theme changed to:", themeId);
    setActiveTheme(themeId);
  };
  
  return (
    <DataProvider>
      <div className={`app-container theme-${activeTheme}`}>
        <header className="app-header">
          <h1>Blog UI Options</h1>
          <div className="theme-selector">
            <label htmlFor="theme-select">Select a blog theme:</label>
            <select 
              id="theme-select" 
              value={activeTheme}
              onChange={(e) => handleThemeChange(e.target.value)}
              style={{ 
                cursor: 'pointer', 
                position: 'relative',
                zIndex: 10,
                opacity: 1,
                pointerEvents: 'auto' 
              }}
            >
              {blogThemes.map(theme => (
                <option key={theme.id} value={theme.id}>
                  {theme.name}
                </option>
              ))}
            </select>
          </div>
        </header>
        
        <main className="app-main">
          <div className="responsive-indicators">
            <div className="responsive-indicator mobile">Mobile View</div>
            <div className="responsive-indicator tablet">Tablet View</div>
            <div className="responsive-indicator desktop">Desktop View</div>
          </div>
          
          <div className="sample-container">
            <BlogLayout theme={activeTheme} />
          </div>
        </main>
        
        <footer className="app-footer">
          <p>Blog UI Samples © {new Date().getFullYear()}</p>
        </footer>
      </div>
    </DataProvider>
  );
}

export default App;