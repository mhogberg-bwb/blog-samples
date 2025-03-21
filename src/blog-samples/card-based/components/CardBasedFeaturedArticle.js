import React from 'react';

const CardBasedFeaturedArticle = ({ article }) => {
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
    <div className="featured-article card-based-featured-article">
      <div className="featured-image-container card-based-featured-image-container">
        <img 
          src={`/images/articles/${image}`} 
          alt={title}
          className="featured-image card-based-featured-image"
          onError={(e) => {
            e.target.src = 'https://images.pexels.com/photos/8386437/pexels-photo-8386437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
          }}
        />
        
        {category && (
          <span className="featured-category card-based-featured-category">{category.name}</span>
        )}
      </div>
      
      <div className="featured-content card-based-featured-content">
        <div className="featured-meta card-based-featured-meta">
          {author && (
            <span className="featured-author card-based-featured-author">By {author.name}</span>
          )}
          <span className="featured-date card-based-featured-date">{formattedDate}</span>
          {readTime && (
            <span className="featured-readtime card-based-featured-readtime">{readTime} min read</span>
          )}
        </div>
        
        <h2 className="featured-title card-based-featured-title">{title}</h2>
        <p className="featured-excerpt card-based-featured-excerpt">{excerpt}</p>
        
        <a href="#article" onClick={(e) => e.preventDefault()} className="featured-read-more card-based-featured-read-more">
          Read Full Article
        </a>
      </div>
    </div>
  );
};

export default CardBasedFeaturedArticle;