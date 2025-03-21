import React from 'react';

const GridGallerySidebar = ({ tags, articles }) => {
  // Get the top 5 articles for popular posts section
  const popularArticles = articles.slice(0, 5);
  
  // Function to format dates
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  return (
    <aside className="sidebar grid-gallery-sidebar">
      {/* Tags Section */}
      <section className="sidebar-section grid-gallery-sidebar-section">
        <h3 className="sidebar-heading grid-gallery-sidebar-heading">
          Popular Tags
        </h3>
        
        <ul className="sidebar-tag-list grid-gallery-sidebar-tag-list">
          {tags.map((tag) => (
            <li key={tag.id} className="sidebar-tag-item">
              <a href="#" className="sidebar-tag-link grid-gallery-sidebar-tag-link">
                {tag.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
      
      {/* Popular Posts Section */}
      <section className="sidebar-section grid-gallery-sidebar-section">
        <h3 className="sidebar-heading grid-gallery-sidebar-heading">
          Popular Posts
        </h3>
        
        <div className="sidebar-popular-list">
          {popularArticles.map((article) => (
            <div key={article.id} className="sidebar-popular-item grid-gallery-sidebar-popular-item">
              <div className="sidebar-popular-image-container">
                <img 
                  src={`/images/articles/${article.image}`} 
                  alt={article.title}
                  className="sidebar-popular-image grid-gallery-sidebar-popular-image"
                  onError={(e) => {
                    e.target.src = 'https://images.pexels.com/photos/8386437/pexels-photo-8386437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
                  }}
                />
              </div>
              
              <div className="sidebar-popular-content">
                <h4 className="sidebar-popular-title grid-gallery-sidebar-popular-title">
                  {article.title}
                </h4>
                
                <span className="sidebar-popular-date grid-gallery-sidebar-popular-date">
                  {formatDate(article.publishDate)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default GridGallerySidebar;