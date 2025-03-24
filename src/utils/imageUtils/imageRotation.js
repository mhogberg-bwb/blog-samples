/**
 * Image rotation utility for blog samples
 * This helps ensure each blog sample shows a different combination of images
 */

// Available images in the public/images/articles folder
const availableImages = [
  'ai-future.jpg',
  'analog-hobbies.jpg',
  'color-psychology.jpg',
  'pexels-cottonbro-4065891.jpg',
  'pexels-ryutaro-5191371.jpg',
  'sustainable-city.jpg'
];

// Create different combinations for each blog sample
const combinations = {
  'classic-news': [
    'ai-future.jpg',
    'sustainable-city.jpg',
    'analog-hobbies.jpg',
    'pexels-cottonbro-4065891.jpg',
    'pexels-ryutaro-5191371.jpg',
    'color-psychology.jpg'
  ],
  'minimalist': [
    'sustainable-city.jpg',
    'color-psychology.jpg',
    'pexels-ryutaro-5191371.jpg',
    'ai-future.jpg',
    'analog-hobbies.jpg',
    'pexels-cottonbro-4065891.jpg'
  ],
  'card-based': [
    'analog-hobbies.jpg',
    'pexels-ryutaro-5191371.jpg',
    'color-psychology.jpg',
    'sustainable-city.jpg',
    'pexels-cottonbro-4065891.jpg',
    'ai-future.jpg'
  ],
  'grid-gallery': [
    'color-psychology.jpg',
    'ai-future.jpg',
    'pexels-cottonbro-4065891.jpg',
    'analog-hobbies.jpg',
    'sustainable-city.jpg',
    'pexels-ryutaro-5191371.jpg'
  ]
};

/**
 * Get the image for a specific blog sample and article
 * @param {string} sampleName - The name of the blog sample ('classic-news', 'minimalist', etc.)
 * @param {object} article - The article object
 * @return {string} The image path to use
 */
export const getImageForSample = (sampleName, article) => {
  if (!combinations[sampleName]) {
    return `/images/articles/${article.image}`;
  }

  // Use the article ID to get the appropriate image from the combination
  const articleIndex = (article.id - 1) % 6; // Ensure index is in range (0-5)
  const imageName = combinations[sampleName][articleIndex];
  
  return `/images/articles/${imageName}`;
};

export default getImageForSample;
