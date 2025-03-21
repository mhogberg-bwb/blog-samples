import React from 'react';

const GridGalleryArticleList = ({ articles }) => {
  if (!articles || articles.length === 0) {
    return (
      <div className="no-articles">
        No articles found.
      </div>
    );
  }
  
  // Function to format dates
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  return (
    <section className="article-list">
      <h2 className="article-list-heading grid-gallery-article-list-heading">
        Latest Articles
      </h2>
      
      <div className="article-grid grid-gallery-article-grid">
        {articles.map((article) => (
          <article key={article.id} className="article-item grid-gallery-article-item">
            <div className="article-image-container grid-gallery-article-image-container">
              <img 
                src={`/images/articles/${article.image}`} 
                alt={article.title} 
                className="article-image"
                onError={(e) => {
                  e.target.src = 'https://images.pexels.com/photos/8386437/pexels-photo-8386437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
                }}
              />
              <span className="article-category grid-gallery-article-category">
                {article.category && article.category.name}
              </span>
            </div>
            
            <div className="article-content grid-gallery-article-content">
              <h3 className="article-title grid-gallery-article-title">
                {article.title}
              </h3>
              
              <p className="article-excerpt grid-gallery-article-excerpt">
                {article.excerpt}
              </p>
              
              <div className="article-meta grid-gallery-article-meta">
                <div className="article-details">
                  <span className="article-author">
                    By {article.author && article.author.name}
                  </span>
                  <span className="article-date">
                    {formatDate(article.publishDate)}
                  </span>
                </div>
                
                <span className="article-read-time">
                  {article.readTime} min read
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default GridGalleryArticleList;