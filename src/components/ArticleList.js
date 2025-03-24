import React from 'react';
import ArticleItem from './ArticleItem';

const ArticleList = ({ articles, title }) => {
  return (
    <section className="blog-article-list">
      {title && <h2 className="blog-article-list-heading">{title}</h2>}
      
      <div className="blog-article-grid">
        {articles.length > 0 ? (
          articles.map((article) => (
            <ArticleItem key={article.id} article={article} />
          ))
        ) : (
          <p className="blog-no-articles">No articles to display</p>
        )}
      </div>
{/*       
      {articles.length > 0 && (
        <div className="blog-load-more">
          <button className="blog-load-more-button">Load More</button>
        </div>
      )} */}
    </section>
  );
};

export default ArticleList;