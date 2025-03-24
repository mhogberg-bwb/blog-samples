import React from 'react';

const FeaturedArticle = ({ article }) => {
  const {
    id,
    title,
    excerpt,
    image,
    author,
    publishDate,
    category,
    readTime
  } = article;

  return (
    <section className="blog-featured-article">
      <div className="blog-featured-image-container">
        <img src={image} alt={title} className="blog-featured-image" />
        {category && (
          <a href={`/category/${category.slug}`} className="blog-featured-category">
            {category.name}
          </a>
        )}
      </div>
      
      <div className="blog-featured-content">
        <h2 className="blog-featured-title">
          <a href={`/article/${id}`}>{title}</a>
        </h2>
        
        <p className="blog-featured-excerpt">{excerpt}</p>
        
        <div className="blog-featured-meta">
          {author && (
            <div className="blog-featured-author">
              <span>By <a href={`/author/${author.id}`}>{author.name}</a></span>
            </div>
          )}
          
          <div className="blog-featured-details">
            <span className="publish-date">{publishDate}</span>
            {readTime && <span className="read-time">{readTime} min read</span>}
          </div>
        </div>
        
        <a href={`/article/${id}`} className="blog-featured-read-more">
          Read More
        </a>
      </div>
    </section>
  );
};

export default FeaturedArticle;