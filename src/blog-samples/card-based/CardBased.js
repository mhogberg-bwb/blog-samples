import React from 'react';
import { useData } from '../../utils/DataContext';
import CardBasedHeader from './components/CardBasedHeader';
import CardBasedFeaturedArticle from './components/CardBasedFeaturedArticle';
import CardBasedArticleList from './components/CardBasedArticleList';
import CardBasedSidebar from './components/CardBasedSidebar';
import CardBasedFooter from './components/CardBasedFooter';
import '../../styles/base-styles.css';
import '../../styles/themes/card-based.css';

const CardBased = () => {
  const { articles, tags, isLoading } = useData();
  
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
  
  // Get featured article (first article)
  const featuredArticle = articles[0];
  
  // Get remaining articles for the list
  const remainingArticles = articles.slice(1);
  
  return (
    <div className="container card-based-container">
      <CardBasedHeader />
      
      <main className="main card-based-main">
        <div className="content-container">
          <div className="content">
            <CardBasedFeaturedArticle article={featuredArticle} />
            <CardBasedArticleList articles={remainingArticles} />
          </div>
          
          <CardBasedSidebar tags={tags} articles={articles} />
        </div>
      </main>
      
      <CardBasedFooter />
    </div>
  );
};

export default CardBased;