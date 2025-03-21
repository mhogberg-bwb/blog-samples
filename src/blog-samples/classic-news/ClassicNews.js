import React from 'react';
import { useData } from '../../utils/DataContext';
import ClassicHeader from './components/ClassicHeader';
import ClassicFeaturedArticle from './components/ClassicFeaturedArticle';
import ClassicArticleList from './components/ClassicArticleList';
import ClassicSidebar from './components/ClassicSidebar';
import ClassicFooter from './components/ClassicFooter';
import './css/classic-news.css';

const ClassicNews = () => {
  const { articles, tags, isLoading } = useData();
  
  if (isLoading) {
    return <div className="cn-loading">Loading...</div>;
  }
  
  // Get featured article (first article)
  const featuredArticle = articles[0];
  
  // Get remaining articles for the list
  const remainingArticles = articles.slice(1);
  
  return (
    <div className="cn-container">
      <ClassicHeader />
      
      <main className="cn-main">
        <div className="cn-content-container">
          <div className="cn-content">
            <ClassicFeaturedArticle article={featuredArticle} />
            <ClassicArticleList articles={remainingArticles} />
          </div>
          
          <ClassicSidebar tags={tags} articles={articles} />
        </div>
      </main>
      
      <ClassicFooter />
    </div>
  );
};

export default ClassicNews;