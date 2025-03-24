import React from 'react';
import { useData } from '../utils/DataContext';
import Header from './Header';
import FeaturedArticle from './FeaturedArticle';
import ArticleList from './ArticleList';
import Sidebar from './Sidebar';
import Footer from './Footer';

const BlogLayout = ({ theme }) => {
  const { articles, categories, authors, isLoading } = useData();
  
  // Get the first article as featured
  const featuredArticle = articles.length > 0 ? articles[0] : null;
  
  // Get the rest of the articles for the list
  const regularArticles = articles.length > 1 ? articles.slice(1) : [];
  
  // Get popular posts (for this example, we'll use the first 3 articles)
  const popularPosts = articles.slice(0, 3);
  
  // Sample tags
  const tags = [
    { id: 1, name: 'Technology', slug: 'technology' },
    { id: 2, name: 'Design', slug: 'design' },
    { id: 3, name: 'Marketing', slug: 'marketing' },
    { id: 4, name: 'Development', slug: 'development' },
    { id: 5, name: 'Business', slug: 'business' }
  ];
  
  // Sample social links
  const socialLinks = [
    { platform: 'Twitter', url: 'https://twitter.com/', icon: '🐦' },
    { platform: 'Facebook', url: 'https://facebook.com/', icon: '📘' },
    { platform: 'Instagram', url: 'https://instagram.com/', icon: '📷' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/', icon: '🔗' }
  ];

  // Customize blog title and subtitle based on theme
  const getBlogInfo = () => {
    switch(theme) {
      case 'classic-news':
        return { title: 'Classic News', subtitle: 'Your Source for Timeless Journalism' };
      case 'minimalist':
        return { title: 'Minimalist', subtitle: 'Less is More' };
      case 'card-based':
        return { title: 'Card Based', subtitle: 'Information at a Glance' };
      case 'grid-gallery':
        return { title: 'Grid Gallery', subtitle: 'A Visual Experience' };
      case 'magazine':
        return { title: 'Magazine', subtitle: 'In-depth Stories and Features' };
      case 'tech-blog':
        return { title: 'Tech Blog', subtitle: 'Latest in Technology' };
      case 'personal-journal':
        return { title: 'Personal Journal', subtitle: 'Thoughts and Reflections' };
      case 'corporate':
        return { title: 'Corporate News', subtitle: 'Business Updates and Insights' };
      case 'creative-portfolio':
        return { title: 'Creative Portfolio', subtitle: 'Showcasing Creative Work' };
      case 'longform-reading':
        return { title: 'Longform', subtitle: 'Deep Dives and Thoughtful Essays' };
      case 'video-centric':
        return { title: 'Video Blog', subtitle: 'Stories in Motion' };
      case 'podcast-audio':
        return { title: 'Podcast & Audio', subtitle: 'Listen to Our Stories' };
      default:
        return { title: 'Blog Title', subtitle: 'Your Source for Interesting Articles' };
    }
  };

  const blogInfo = getBlogInfo();

  if (isLoading) {
    return <div className="blog-loading">Loading...</div>;
  }

  // Process articles to ensure they have the correct properties for rendering
  const processedArticles = articles.map(article => ({
    ...article,
    image: article.image || article.featuredImage || 'https://via.placeholder.com/800x400'
  }));

  const processedFeaturedArticle = featuredArticle ? {
    ...featuredArticle,
    image: featuredArticle.image || featuredArticle.featuredImage || 'https://via.placeholder.com/1200x600'
  } : null;

  const processedPopularPosts = popularPosts.map(post => ({
    ...post,
    image: post.image || post.featuredImage || post.thumbnail || 'https://via.placeholder.com/100x100'
  }));

  return (
    <div className={`blog-container`}>
      <Header 
        title={blogInfo.title} 
        subtitle={blogInfo.subtitle} 
        categories={categories} 
      />
      
      <div className="blog-content-container">
        <div className="blog-content">
          {processedFeaturedArticle && (
            <FeaturedArticle article={processedFeaturedArticle} />
          )}
          
          <ArticleList 
            articles={processedArticles.slice(1)} 
            title="Latest Articles" 
          />
        </div>
        
        <Sidebar 
          categories={categories} 
          popularPosts={processedPopularPosts} 
          tags={tags} 
        />
      </div>
      
      <Footer 
        categories={categories} 
        socialLinks={socialLinks} 
      />
    </div>
  );
};

export default BlogLayout;