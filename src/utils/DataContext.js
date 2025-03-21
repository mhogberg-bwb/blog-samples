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
    
    setArticles(processedArticles);
    setAuthors(authorsData);
    setCategories(categoriesData);
    setComments(commentsData);
    setIsLoading(false);
  }, []);

  return (
    <DataContext.Provider value={{ 
      articles, 
      authors, 
      categories, 
      comments,
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