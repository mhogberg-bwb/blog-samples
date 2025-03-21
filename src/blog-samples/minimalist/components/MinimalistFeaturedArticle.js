import React from 'react';

const MinimalistFeaturedArticle = ({ article }) => {
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
    <div className="featured-article minimalist-featured-article">
      <div className="featured-image-container minimalist-featured-image-container">
        <img 
          src={`/images/articles/${image}`} 
          alt={title}
          className="featured-image"
          onError={(e) => {
            e.target.src = 'https://images.pexels.com/photos/8386437/pexels-photo-8386437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
          }}
        />
        
        {category && (
          <span className="featured-category minimalist-featured-category">{category.name}</span>
        )}
      </div>
      
      <div className="featured-content minimalist-featured-content">
        <div className="featured-meta minimalist-featured-meta">
          {author && (
            <span className="featured-author minimalist-featured-author">By {author.name}</span>
          )}
          <span className="featured-date minimalist-featured-date">{formattedDate}</span>
          {readTime && (
            <span className="featured-readtime minimalist-featured-readtime">{readTime} min read</span>
          )}
        </div>
        
        <h2 className="featured-title minimalist-featured-title">{title}</h2>
        <p className="featured-excerpt minimalist-featured-excerpt">{excerpt}</p>
        
        <a href="#article" onClick={(e) => e.preventDefault()} className="featured-read-more minimalist-featured-read-more">
          Continue Reading
        </a>
      </div>
    </div>
  );
};

export default MinimalistFeaturedArticle;