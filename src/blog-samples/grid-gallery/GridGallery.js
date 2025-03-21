import React from 'react';
import { useData } from '../../utils/DataContext';
import GridGalleryHeader from './components/GridGalleryHeader';
//import GridGalleryFeaturedArticle from './components/GridGalleryFeaturedArticle';
//import GridGalleryArticleList from './components/GridGalleryArticleList';
import GridGallerySidebar from './components/GridGallerySidebar';
import GridGalleryFooter from './components/GridGalleryFooter';
// import '../../styles/base-styles.css';
// import '../../styles/themes/grid-gallery.css';

const GridGallery = () => {
  const { articles, tags, isLoading } = useData();
  
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
  
  // Get featured article (first article)
  const featuredArticle = articles[0];
  
  // Get remaining articles for the list
  const remainingArticles = articles.slice(1);
  
  return (
    <div className="container grid-gallery-container">
       <GridGalleryHeader />
      
      <main className="main">
        <div className="content-container">
          <div className="content">
            {/* <GridGalleryFeaturedArticle article={featuredArticle} /> */}
            {/* <GridGalleryArticleList articles={remainingArticles} /> */}
          </div>
          
          <GridGallerySidebar tags={tags} articles={articles} />
        </div>
      </main>
      
      <GridGalleryFooter /> 
    </div>
  );
};

export default GridGallery;