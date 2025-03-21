import React from 'react';

const GridGalleryFeaturedArticle = ({ article }) => {
  if (!article) return null;
  
  // Format date
  const formattedDate = new Date(article.publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <article className="featured-article grid-gallery-featured-article">
      <div className="featured-image-container grid-gallery-featured-image-container">
        <img 
          src={`/images/articles/${article.image}`} 
          alt={article.title} 
          className="featured-image"
          onError={(e) => {
            e.target.src = 'https://images.pexels.com/photos/8386437/pexels-photo-8386437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
          }}
        />
        <span className="featured-category grid-gallery-featured-category">
          {article.category && article.category.name}
        </span>
      </div>
      
      <div className="featured-content grid-gallery-featured-content">
        <h2 className="featured-title grid-gallery-featured-title">
          {article.title}
        </h2>
        
        <div className="featured-meta grid-gallery-featured-meta">
          <span className="featured-author grid-gallery-featured-author">
            By {article.author && article.author.name}
          </span>
          <span className="featured-date">
            {formattedDate}
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