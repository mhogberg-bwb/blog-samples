import React from 'react';

const CardBasedSidebar = ({ tags, articles }) => {
  // Get top 4 articles for popular section
  const popularArticles = [...articles]
    .sort((a, b) => b.views - a.views)
    .slice(0, 4);
  
  return (
    <aside className="sidebar card-based-sidebar">
      {/* Tags Section */}
      <div className="sidebar-section card-based-sidebar-section">
        <h3 className="sidebar-heading card-based-sidebar-heading">Popular Topics</h3>
        <ul className="sidebar-tag-list card-based-sidebar-tag-list">
          {tags.map(tag => (
            <li key={tag.id} className="sidebar-tag-item card-based-sidebar-tag-item">
              <a href="#tag" onClick={(e) => e.preventDefault()} className="sidebar-tag-link card-based-sidebar-tag-link">
                {tag.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Popular Articles Section */}
      <div className="sidebar-section card-based-sidebar-section">
        <h3 className="sidebar-heading card-based-sidebar-heading">Trending Now</h3>
        <div className="sidebar-popular-list card-based-sidebar-popular-list">
          {popularArticles.map(article => (
            <div key={article.id} className="sidebar-popular-item card-based-sidebar-popular-item">
              <div className="sidebar-popular-image-container card-based-sidebar-popular-image-container">
                <img 
                  src={`/images/articles/${article.image}`}
                  alt={article.title}
                  className="sidebar-popular-image card-based-sidebar-popular-image"
                  onError={(e) => {
                    e.target.src = 'https://images.pexels.com/photos/8386437/pexels-photo-8386437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
                  }}
                />
              </div>
              <div className="sidebar-popular-content card-based-sidebar-popular-content">
                <h4 className="sidebar-popular-title card-based-sidebar-popular-title">
                  {article.title}
                </h4>
                <span className="sidebar-popular-date card-based-sidebar-popular-date">
                  {new Date(article.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
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

export default CardBasedSidebar;