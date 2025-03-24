import React from 'react';

const ArticleItem = ({ article }) => {
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
    <article className="blog-article-item">
      {image && (
        <div className="blog-article-image-container">
          <a href={`/article/${id}`}>
            <img src={image} alt={title} className="blog-article-image" />
          </a>
          {category && (
            <a href={`/category/${category.slug}`} className="blog-article-category">
              {category.name}
            </a>
          )}
        </div>
      )}
      
      <div className="blog-article-content">
        <h3 className="blog-article-title">
          <a href={`/article/${id}`}>{title}</a>
        </h3>
        
        <p className="blog-article-excerpt">{excerpt}</p>
        
        <div className="blog-article-meta">
          {author && (
            <div className="blog-article-author">
              <span>By <a href={`/author/${author.id}`}>{author.name}</a></span>
            </div>
          )}
          
          <div className="blog-article-details">
            <span className="publish-date">{publishDate}</span>
            {readTime && <span className="read-time">{readTime} min read</span>}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleItem;