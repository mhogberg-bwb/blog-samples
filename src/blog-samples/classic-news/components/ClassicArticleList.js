import React from 'react';

const ClassicArticleList = ({ articles }) => {
  if (!articles || articles.length === 0) {
    return <div className="cn-no-articles">No articles to display</div>;
  }
  
  return (
    <div className="cn-article-list">
      <h3 className="cn-article-list-heading">Latest Articles</h3>
      
      <div className="cn-article-grid">
        {articles.map(article => {
          const { 
            id, 
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
            <article key={id} className="cn-article-item">
              <div className="cn-article-image-container">
                <img 
                  src={`/images/articles/${image}`} 
                  alt={title}
                  className="cn-article-image"
                  onError={(e) => {
                    // Assign image based on article content
                    if (title.includes('Sustainable')) {
                      e.target.src = 'https://images.pexels.com/photos/5273544/pexels-photo-5273544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
                    } else if (title.includes('Analog') || title.includes('Renaissance')) {
                      e.target.src = 'https://images.pexels.com/photos/6422059/pexels-photo-6422059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
                    } else {
                      e.target.src = 'https://cdn.pixabay.com/photo/2019/08/06/22/48/artificial-intelligence-4389372_1280.jpg';
                    }
                  }}
                />
                
                {category && (
                  <span className="cn-article-category">{category.name}</span>
                )}
              </div>
              
              <div className="cn-article-content">
                <h3 className="cn-article-title">{title}</h3>
                <p className="cn-article-excerpt">{excerpt}</p>
                
                <div className="cn-article-meta">
                  {author && (
                    <span className="cn-article-author">By {author.name}</span>
                  )}
                  <div className="cn-article-details">
                    <span className="cn-article-date">{formattedDate}</span>
                    {readTime && (
                      <span className="cn-article-readtime">{readTime} min read</span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default ClassicArticleList;