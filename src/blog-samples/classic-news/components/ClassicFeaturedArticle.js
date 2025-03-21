import React from 'react';

const ClassicFeaturedArticle = ({ article }) => {
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
  
  return (
    <div className="cn-featured-article">
      <div className="cn-featured-image-container">
        <img 
          src={`/images/articles/${image}`} 
          alt={title}
          className="cn-featured-image"
          onError={(e) => {
            e.target.src = '/images/articles/default-article.jpg';
          }}
        />
        
        {category && (
          <span className="cn-featured-category">{category.name}</span>
        )}
      </div>
      
      <div className="cn-featured-content">
        <h2 className="cn-featured-title">{title}</h2>
        <p className="cn-featured-excerpt">{excerpt}</p>
        
        <div className="cn-featured-meta">
          {author && (
            <span className="cn-featured-author">By {author.name}</span>
          )}
          <span className="cn-featured-date">{formattedDate}</span>
          {readTime && (
            <span className="cn-featured-readtime">{readTime} min read</span>
          )}
        </div>
        
        <a href="#" className="cn-featured-read-more">
          Read Full Article
        </a>
      </div>
    </div>
  );
};

export default ClassicFeaturedArticle;