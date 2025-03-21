import React from 'react';

const ClassicSidebar = ({ categories, articles }) => {
  // Get popular articles (for this demo, just using the first 3)
  const popularArticles = articles.slice(0, 3);
  
  return (
    <aside className="cn-sidebar">
      <div className="cn-sidebar-section cn-sidebar-categories">
        <h3 className="cn-sidebar-heading">Categories</h3>
        <ul className="cn-sidebar-category-list">
          {categories.map(category => (
            <li key={category.id} className="cn-sidebar-category-item">
              <a href={`#${category.slug}`} className="cn-sidebar-category-link">
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="cn-sidebar-section cn-sidebar-popular">
        <h3 className="cn-sidebar-heading">Popular Articles</h3>
        <div className="cn-sidebar-popular-list">
          {popularArticles.map(article => (
            <div key={article.id} className="cn-sidebar-popular-item">
              <div className="cn-sidebar-popular-image-container">
                <img 
                  src={`/images/articles/${article.image}`} 
                  alt={article.title}
                  className="cn-sidebar-popular-image"
                  onError={(e) => {
                    e.target.src = '/images/articles/default-article.jpg';
                  }}
                />
              </div>
              <div className="cn-sidebar-popular-content">
                <h4 className="cn-sidebar-popular-title">{article.title}</h4>
                <span className="cn-sidebar-popular-date">
                  {new Date(article.publishDate).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="cn-sidebar-section cn-sidebar-newsletter">
        <h3 className="cn-sidebar-heading">Subscribe to Our Newsletter</h3>
        <form className="cn-sidebar-newsletter-form">
          <p className="cn-sidebar-newsletter-desc">
            Get the latest news and updates delivered straight to your inbox.
          </p>
          <input 
            type="email" 
            placeholder="Your email address"
            className="cn-sidebar-newsletter-input"
          />
          <button type="submit" className="cn-sidebar-newsletter-button">
            Subscribe
          </button>
        </form>
      </div>
    </aside>
  );
};

export default ClassicSidebar;