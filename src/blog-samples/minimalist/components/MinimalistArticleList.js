import React from 'react';

const MinimalistArticleList = ({ articles }) => {
  if (!articles || articles.length === 0) {
    return (
      <div className="no-articles">
        No articles found.
      </div>
    );
  }
  
  return (
    <div className="article-list minimalist-article-list">
      <h3 className="article-list-heading minimalist-article-list-heading">Recent Articles</h3>
      
      <div className="article-grid minimalist-article-grid">
        {articles.map(article => (
          <div key={article.id} className="article-item minimalist-article-item">
            <div className="article-image-container minimalist-article-image-container">
              <img 
                src={`/images/articles/${article.image}`} 
                alt={article.title}
                className="article-image minimalist-article-image"
                onError={(e) => {
                  e.target.src = 'https://images.pexels.com/photos/8386437/pexels-photo-8386437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
                }}
              />
              
              {article.category && (
                <span className="article-category minimalist-article-category">{article.category.name}</span>
              )}
            </div>
            
            <div className="article-content minimalist-article-content">
              <h3 className="article-title minimalist-article-title">{article.title}</h3>
              <p className="article-excerpt minimalist-article-excerpt">{article.excerpt}</p>
              
              <div className="article-meta minimalist-article-meta">
                <div className="article-details minimalist-article-details">
                  <span className="article-date minimalist-article-date">
                    {new Date(article.publishDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                
                {article.readTime && (
                  <span className="article-readtime minimalist-article-readtime">
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

export default MinimalistArticleList;