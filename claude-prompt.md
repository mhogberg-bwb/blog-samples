# Blog Samples Project Prompt

I'm working on a React project to create 12 different blog UI designs using a specific color palette. Please help me continue developing these blog samples based on the following details:

## Project Requirements

- Create 12 different blog UI designs that showcase different approaches to blog layout and styling
- Use a consistent color palette extracted from existing CSS:
  - Primary Blue: `#4175ac`
  - Light Blue 1: `#dbebfd`
  - Light Blue 2: `#d7ebff`
  - Bright Blue: `#2199e8`
  - Neutrals: `#333`, `#5f5f5f`, `#696969`, `#aaa`, `#ccc`, `#e5e5e5`, `#f5f5f5`, `#fff`
  - Functional Colors: Green for success, Red for errors/alerts
- Use vanilla CSS (no frameworks like Tailwind, Bootstrap, etc.)
- CSS should be completely decoupled from React components
- Structure each blog sample with its own directory and set of components
- Create separate CSS files for different media queries:
  - Mobile: `max-width: 767px`
  - Tablet: `min-width: 768px and max-width: 1199px`
  - Desktop: `min-width: 1200px`
- Use a mobile-first approach to ensure everything looks great on all devices
- Create reusable components to reduce code duplication
- Use shared sample data (articles, authors, categories, comments) across all designs

## Current Project State

1. **Project Structure**:
   - `blog-samples/`
     - `public/` - Public assets and responsive CSS files
     - `src/` - Source code
       - `blog-samples/` - Individual blog sample implementations
         - `classic-news/` - First blog sample (implemented)
       - `components/` - Shared components
       - `data/` - JSON files with sample data
       - `styles/` - Global styles
       - `utils/` - Helper functions and context

2. **Completed Work**:
   - Project structure and organization
   - Sample data in JSON format
   - Data context system
   - Shared components (Author, ArticleCard, Comment)
   - Classic News blog sample with responsive design
   - Main App component with sample selector

3. **Blog Samples Planned**:
   - Classic News (completed)
   - Minimalist
   - Card-Based
   - Grid Gallery
   - Magazine
   - Tech Blog
   - Personal Journal
   - Corporate
   - Creative Portfolio
   - Long-form Reading
   - Video-Centric
   - Podcast/Audio

## Next Steps

Please help me continue developing the remaining blog samples. For each sample:

1. Create the directory structure and component files
2. Implement the responsive CSS for mobile, tablet, and desktop
3. Ensure the design is cohesive with the established color palette
4. Test responsiveness across different viewport sizes
5. Register the new sample in the main App.js selector

Start with the Minimalist design as the next sample to implement, focusing on clean typography and ample white space with minimal decorative elements.

## Implementation Guidelines

- Create many small, focused components rather than few large ones
- Store all CSS in separate files from React components
- Use clear, descriptive class names following the pattern `[sample-prefix]-[element-name]`
- Ensure all designs are accessible
- Optimize images and assets for performance
- Document component usage and design decisions

The goal is to provide the executive team with 12 distinct blog designs to evaluate, all using the same consistent brand colors but with different layouts, typography, and overall aesthetic approaches.
