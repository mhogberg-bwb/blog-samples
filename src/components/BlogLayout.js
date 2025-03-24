import React from 'react';
import { useData } from '../utils/DataContext';
import Header from './Header';
import FeaturedArticle from './FeaturedArticle';
import ArticleList from './ArticleList';
import Sidebar from './Sidebar';
import Footer from './Footer';

// SVG icons for social media
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

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
  
  // Sample social links with SVG components instead of emoji icons
  const socialLinks = [
    { platform: 'Twitter', url: 'https://twitter.com/', icon: <TwitterIcon /> },
    { platform: 'Facebook', url: 'https://facebook.com/', icon: <FacebookIcon /> },
    { platform: 'Instagram', url: 'https://instagram.com/', icon: <InstagramIcon /> },
    { platform: 'LinkedIn', url: 'https://linkedin.com/', icon: <LinkedInIcon /> }
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
    image: article.image || article.featuredImage || '/images/articles/ai-future.jpg'
  }));

  const processedFeaturedArticle = featuredArticle ? {
    ...featuredArticle,
    image: featuredArticle.image || featuredArticle.featuredImage || '/images/articles/ai-future.jpg'
  } : null;

  const processedPopularPosts = popularPosts.map(post => ({
    ...post,
    image: post.image || post.featuredImage || post.thumbnail || '/images/articles/ai-future.jpg'
  }));

  return (
    <div className={`blog-container blog-theme-${theme}`}>
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