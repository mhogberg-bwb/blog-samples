import React from 'react';

const GridGalleryArticleList = ({ articles }) => {
  if (!articles || articles.length === 0) {
    return (
      <div className="no-articles">
        No articles found.
      </div>
    );
  }
  
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
                src={article.image} 
                alt={article.title} 
                className="article-image"
              />
              <span className="article-category grid-gallery-article-category">
                {article.category}
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
                    By {article.author}
                  </span>
                  <span className="article-date">
                    {article.date}
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