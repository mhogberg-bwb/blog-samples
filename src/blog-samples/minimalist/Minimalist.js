import React from 'react';
import { useData } from '../../utils/DataContext';
import MinimalistHeader from './components/MinimalistHeader';
import MinimalistFeaturedArticle from './components/MinimalistFeaturedArticle';
import MinimalistArticleList from './components/MinimalistArticleList';
import MinimalistSidebar from './components/MinimalistSidebar';
import MinimalistFooter from './components/MinimalistFooter';
// CSS is now loaded via App.js

const Minimalist = () => {
  const { articles, tags, isLoading } = useData();
  
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
  
  // Get featured article (first article)
  const featuredArticle = articles[0];
  
  // Get remaining articles for the list
  const remainingArticles = articles.slice(1);
  
  return (
    <div className="container minimalist-container">
      <MinimalistHeader />
      
      <main className="main">
        <div className="content-container">
          <div className="content">
            <MinimalistFeaturedArticle article={featuredArticle} />
            <MinimalistArticleList articles={remainingArticles} />
          </div>
          
          <MinimalistSidebar tags={tags} articles={articles} />
        </div>
      </main>
      
      <MinimalistFooter />
    </div>
  );
};

export default Minimalist;