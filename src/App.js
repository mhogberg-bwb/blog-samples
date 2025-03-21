import React, { useState } from 'react';
import { DataProvider } from './utils/DataContext';
import ClassicNews from './blog-samples/classic-news/ClassicNews';
import Minimalist from './blog-samples/minimalist/Minimalist';
import CardBased from './blog-samples/card-based/CardBased';
import './styles/App.css';

function App() {
  const [activeSample, setActiveSample] = useState('classic-news');
  
  const blogSamples = [
    { id: 'classic-news', name: 'Classic News', component: ClassicNews },
    { id: 'minimalist', name: 'Minimalist', component: Minimalist },
    { id: 'card-based', name: 'Card-Based', component: CardBased },
    // More samples will be added later
  ];
  
  const handleSampleChange = (sampleId) => {
    setActiveSample(sampleId);
  };
  
  // Find the active sample
  const ActiveSampleComponent = blogSamples.find(sample => sample.id === activeSample)?.component || null;
  
  return (
    <DataProvider>
      <div className="app-container">
        <header className="app-header">
          <h1>Blog UI Options</h1>
          <div className="sample-selector">
            <label htmlFor="sample-select">Select a blog sample:</label>
            <select 
              id="sample-select" 
              value={activeSample}
              onChange={(e) => handleSampleChange(e.target.value)}
            >
              {blogSamples.map(sample => (
                <option key={sample.id} value={sample.id}>
                  {sample.name}
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
            {ActiveSampleComponent ? (
              <ActiveSampleComponent />
            ) : (
              <div className="sample-not-found">
                Sample not found. Please select a different option.
              </div>
            )}
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