import React, { createContext, useContext, useState, useEffect } from 'react';
import articlesData from '../data/articles.json';
import authorsData from '../data/authors.json';
import categoriesData from '../data/categories.json';
import commentsData from '../data/comments.json';

// Create the context
const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [comments, setComments] = useState([]);
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Process and connect data
    const processedArticles = articlesData.map(article => {
      // Find the author
      const author = authorsData.find(a => a.id === article.author);
      
      // Find the category
      const category = categoriesData.find(c => c.id === article.category);
      
      // Find the comments
      const articleComments = commentsData.filter(c => 
        article.comments && article.comments.includes(c.id)
      );
      
      return {
        ...article,
        author,
        category,
        comments: articleComments,
      };
    });
    
    // Extract unique tags from all articles
    const allTags = [];
    processedArticles.forEach(article => {
      if (article.tags && Array.isArray(article.tags)) {
        article.tags.forEach(tag => {
          if (!allTags.find(t => t.name === tag)) {
            allTags.push({ id: allTags.length + 1, name: tag, slug: tag.toLowerCase().replace(/\s+/g, '-') });
          }
        });
      }
    });
    
    setArticles(processedArticles);
    setAuthors(authorsData);
    setCategories(categoriesData);
    setComments(commentsData);
    setTags(allTags);
    setIsLoading(false);
  }, []);

  return (
    <DataContext.Provider value={{ 
      articles, 
      authors, 
      categories, 
      comments,
      tags,
      isLoading
    }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use the data context
export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export default DataContext;