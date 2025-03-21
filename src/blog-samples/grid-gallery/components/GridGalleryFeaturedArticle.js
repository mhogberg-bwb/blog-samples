import React from 'react';

const GridGalleryFeaturedArticle = ({ article }) => {
  if (!article) return null;
  
  return (
    <article className="featured-article grid-gallery-featured-article">
      <div className="featured-image-container grid-gallery-featured-image-container">
        <img 
          src={article.image} 
          alt={article.title} 
          className="featured-image"
        />
        <span className="featured-category grid-gallery-featured-category">
          {article.category}
        </span>
      </div>
      
      <div className="featured-content grid-gallery-featured-content">
        <h2 className="featured-title grid-gallery-featured-title">
          {article.title}
        </h2>
        
        <div className="featured-meta grid-gallery-featured-meta">
          <span className="featured-author grid-gallery-featured-author">
            By {article.author}
          </span>
          <span className="featured-date">
            {article.date}
          </span>
          <span className="featured-read-time">
            {article.readTime} min read
          </span>
        </div>
        
        <p className="featured-excerpt grid-gallery-featured-excerpt">
          {article.excerpt}
        </p>
        
        <a href="#" className="featured-read-more grid-gallery-featured-read-more">
          Read More
        </a>
      </div>
    </article>
  );
};

export default GridGalleryFeaturedArticle;