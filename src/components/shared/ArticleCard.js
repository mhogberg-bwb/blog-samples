import React from 'react';
import './ArticleCard.css';

const ArticleCard = ({ 
  article, 
  variant = 'default', 
  showExcerpt = true, 
  showAuthor = true,
  showCategory = true,
  showReadTime = true,
  imageSize = 'medium',
  orientation = 'vertical'
}) => {
  if (!article) return null;
  
  const { 
    title, 
    excerpt, 
    image, 
    author, 
    category, 
    publishDate, 
    readTime 
  } = article;
  
  // Format date
  const formattedDate = new Date(publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const cardClasses = `
    article-card 
    article-card-${variant} 
    article-card-${orientation}
    image-size-${imageSize}
  `;
  
  return (
    <div className={cardClasses}>
      <div className="article-card-image-container">
        <img 
          src={`/images/articles/${image}`}
          alt={title}
          className="article-card-image"
          onError={(e) => {
            e.target.src = '/images/articles/default-article.jpg';
          }}
        />
      </div>
      
      <div className="article-card-content">
        {showCategory && category && (
          <div className="article-card-category">
            {category.name}
          </div>
        )}
        
        <h2 className="article-card-title">{title}</h2>
        
        {showExcerpt && excerpt && (
          <p className="article-card-excerpt">{excerpt}</p>
        )}
        
        <div className="article-card-meta">
          {showAuthor && author && (
            <div className="article-card-author">
              By {author.name}
            </div>
          )}
          
          <div className="article-card-details">
            <span className="article-card-date">{formattedDate}</span>
            
            {showReadTime && readTime && (
              <span className="article-card-readtime">
                {readTime} min read
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;