import React, { useState, useEffect } from 'react';
import { DataProvider } from './utils/DataContext';
import BlogLayout from './components/BlogLayout';
import './styles/App.css';
import './styles/base-styles.css';

function App() {
  const [activeTheme, setActiveTheme] = useState('classic-news');
  
  // Force load the base-variables.css file first
  useEffect(() => {
    const loadBaseVariables = async () => {
      await import('./styles/base-variables.css');
    };
    loadBaseVariables();
  }, []);
  
  // Dynamic CSS loading based on active theme
  useEffect(() => {
    // Reset any previously loaded theme styles
    document.body.className = `theme-${activeTheme}`;
    
    // Import CSS based on active theme
    const loadThemeCSS = async () => {
      try {
        // Clear any previous dynamically loaded theme CSS
        const oldLinks = document.querySelectorAll('link[data-theme]');
        oldLinks.forEach(link => link.remove());
        
        // Import the appropriate theme CSS
        switch(activeTheme) {
          case 'classic-news':
            await import('./styles/themes/classic-news.css');
            break;
          case 'minimalist':
            await import('./styles/themes/minimalist.css');
            break;
          case 'card-based':
            await import('./styles/themes/card-based.css');
            break;
          case 'grid-gallery':
            await import('./styles/themes/grid-gallery.css');
            break;
          case 'magazine':
            await import('./styles/themes/magazine.css');
            break;
          case 'tech-blog':
            await import('./styles/themes/tech-blog.css');
            break;
          case 'personal-journal':
            await import('./styles/themes/personal-journal.css');
            break;
          case 'corporate':
            await import('./styles/themes/corporate.css');
            break;
          case 'creative-portfolio':
            await import('./styles/themes/creative-portfolio.css');
            break;
          case 'longform-reading':
            await import('./styles/themes/longform-reading.css');
            break;
          case 'video-centric':
            await import('./styles/themes/video-centric.css');
            break;
          case 'podcast-audio':
            await import('./styles/themes/podcast-audio.css');
            break;
          default:
            await import('./styles/themes/classic-news.css');
        }
        
        console.log(`Loaded theme: ${activeTheme}`);
      } catch (error) {
        console.error(`Error loading theme ${activeTheme}:`, error);
      }
    };
    
    loadThemeCSS();
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
            {/* Use the unified BlogLayout component for all themes */}
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