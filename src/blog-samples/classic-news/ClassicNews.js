import React from 'react';
import { useData } from '../../utils/DataContext';
import ClassicHeader from './components/ClassicHeader';
import ClassicFeaturedArticle from './components/ClassicFeaturedArticle';
import ClassicArticleList from './components/ClassicArticleList';
import ClassicSidebar from './components/ClassicSidebar';
import ClassicFooter from './components/ClassicFooter';
import '../../styles/base-styles.css';
import '../../styles/themes/classic-news.css';

const ClassicNews = () => {
  const { articles, tags, isLoading } = useData();
  
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
  
  // Get featured article (first article)
  const featuredArticle = articles[0];
  
  // Get remaining articles for the list
  const remainingArticles = articles.slice(1);
  
  return (
    <div className="container">
      
      <ClassicHeader />
      
      <main className="main">
      <link rel="stylesheet" type="text/css" href="styles/themes/classic-news.css" />
      <link rel="stylesheet" type="text/css" href="styles/base-styles.css" />
        <div className="content-container">
          <div className="content">
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