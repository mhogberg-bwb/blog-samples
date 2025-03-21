import React from 'react';
import { useData } from '../../utils/DataContext';
import ClassicHeader from './components/ClassicHeader';
import ClassicHero from './components/ClassicHero';
import ClassicFeaturedArticle from './components/ClassicFeaturedArticle';
import ClassicArticleList from './components/ClassicArticleList';
import ClassicSidebar from './components/ClassicSidebar';
import ClassicFooter from './components/ClassicFooter';
import './css/classic-news.css';

const ClassicNews = () => {
  const { articles, categories, isLoading } = useData();
  
  if (isLoading) {
    return <div className="cn-loading">Loading...</div>;
  }
  
  // Get featured article (first article)
  const featuredArticle = articles[0];
  
  // Get remaining articles for the list
  const remainingArticles = articles.slice(1);
  
  return (
    <div className="cn-container">
      <ClassicHeader categories={categories} />
      
      <main className="cn-main">
        <ClassicHero />
        
        <div className="cn-content-container">
          <div className="cn-content">
            <ClassicFeaturedArticle article={featuredArticle} />
            <ClassicArticleList articles={remainingArticles} />
          </div>
          
          <ClassicSidebar categories={categories} articles={articles} />
        </div>
      </main>
      
      <ClassicFooter categories={categories} />
    </div>
  );
};

export default ClassicNews;