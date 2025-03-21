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
    <div className="featured-article">
      <div className="featured-image-container">
        <img 
          src={`/images/articles/${image}`} 
          alt={title}
          className="featured-image"
          onError={(e) => {
            e.target.src = 'https://images.pexels.com/photos/8386437/pexels-photo-8386437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
          }}
        />
        
        {category && (
          <span className="featured-category">{category.name}</span>
        )}
      </div>
      
      <div className="featured-content">
        <h2 className="featured-title">{title}</h2>
        <p className="featured-excerpt">{excerpt}</p>
        
        <div className="featured-meta">
          {author && (
            <span className="featured-author">By {author.name}</span>
          )}
          <span className="featured-date">{formattedDate}</span>
          {readTime && (
            <span className="featured-readtime">{readTime} min read</span>
          )}
        </div>
        
        <a href="#" className="featured-read-more">
          Read Full Article
        </a>
      </div>
    </div>
  );
};

export default ClassicFeaturedArticle;