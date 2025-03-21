import React from 'react';

const ClassicSidebar = ({ tags, articles }) => {
  // Get popular articles (for this demo, just using the first 3)
  const popularArticles = articles.slice(0, 3);
  
  return (
    <aside className="sidebar">
      <div className="sidebar-section sidebar-tags">
        <h3 className="sidebar-heading">Tags</h3>
        <ul className="sidebar-tag-list">
          {tags.map(tag => (
            <li key={tag.id} className="sidebar-tag-item">
              <a href={`#${tag.slug}`} className="sidebar-tag-link">
                {tag.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="sidebar-section sidebar-popular">
        <h3 className="sidebar-heading">Popular Articles</h3>
        <div className="sidebar-popular-list">
          {popularArticles.map(article => (
            <div key={article.id} className="sidebar-popular-item">
              <div className="sidebar-popular-image-container">
                <img 
                  src={`/images/articles/${article.image}`} 
                  alt={article.title}
                  className="sidebar-popular-image"
                  onError={(e) => {
                    // Assign image based on article content
                    if (article.title.includes('Sustainable')) {
                      e.target.src = 'https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
                    } else if (article.title.includes('Analog') || article.title.includes('Renaissance')) {
                      e.target.src = 'https://images.pexels.com/photos/4065891/pexels-photo-4065891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
                    } else {
                      e.target.src = 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
                    }
                  }}
                />
              </div>
              <div className="sidebar-popular-content">
                <h4 className="sidebar-popular-title">{article.title}</h4>
                <span className="sidebar-popular-date">
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
    </aside>
  );
};

export default ClassicSidebar;