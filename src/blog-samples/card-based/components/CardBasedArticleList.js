import React from 'react';

const CardBasedArticleList = ({ articles }) => {
  if (!articles || articles.length === 0) {
    return (
      <div className="no-articles">
        No articles found.
      </div>
    );
  }
  
  return (
    <div className="article-list card-based-article-list">
      <h3 className="article-list-heading card-based-article-list-heading">Latest Stories</h3>
      
      <div className="article-grid card-based-article-grid">
        {articles.map(article => (
          <div key={article.id} className="article-item card-based-article-item">
            <div className="article-image-container card-based-article-image-container">
              <img 
                src={`/images/articles/${article.image}`} 
                alt={article.title}
                className="article-image card-based-article-image"
                onError={(e) => {
                  e.target.src = 'https://images.pexels.com/photos/8386437/pexels-photo-8386437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
                }}
              />
              
              {article.category && (
                <span className="article-category card-based-article-category">{article.category.name}</span>
              )}
            </div>
            
            <div className="article-content card-based-article-content">
              <h3 className="article-title card-based-article-title">{article.title}</h3>
              <p className="article-excerpt card-based-article-excerpt">{article.excerpt}</p>
              
              <div className="article-meta card-based-article-meta">
                <div className="article-details card-based-article-details">
                  {article.author && (
                    <span className="article-author card-based-article-author">
                      By {article.author.name}
                    </span>
                  )}
                  <span className="article-date card-based-article-date">
                    {new Date(article.publishDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                
                {article.readTime && (
                  <span className="article-readtime card-based-article-readtime">
                    {article.readTime} min read
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardBasedArticleList;