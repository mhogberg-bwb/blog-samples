# Blog Design System Documentation (Simplified)

## Color Palette

Based on the provided CSS, we'll be using the following color palette across our blog samples:

### Primary Colors
- Primary Blue: `#4175ac` - Used for headings and important text
- Light Blue 1: `#dbebfd` - Used for backgrounds and footer
- Light Blue 2: `#d7ebff` - Used for section backgrounds
- Bright Blue: `#2199e8` - Used for buttons and interactive elements

### Neutrals
- Black: `#000` - Used for primary text
- Dark Gray 1: `#333` - Used for secondary text
- Dark Gray 2: `#262626` - Used for tertiary text
- Medium Gray 1: `#5f5f5f` - Used for less important text
- Medium Gray 2: `#696969` - Used for disabled or less important elements
- Light Gray 1: `#aaa` - Used for placeholders and borders
- Light Gray 2: `#ccc` - Used for borders and dividers
- Light Gray 3: `#e5e5e5` - Used for dividers and secondary backgrounds
- Light Gray 4: `#f5f5f5` - Used for hover states and tertiary backgrounds
- White: `#fff` - Used for text on dark backgrounds and white spaces

### Accent Colors
- Green: `green` - Used for success messages and indicators
- Red: `red` - Used for error messages and alerts

## Typography

We'll implement a consistent typography system across all blog samples:

- Primary Font: 'Montserrat' (as used in the footer)
- Secondary Font: System fonts as fallback

Font sizes will be responsive and follow a scale:
- Large headings: 1.4em to 2em
- Body text: 1em
- Small text: 0.8em

## Blog Sample Themes

We'll create 12 distinct blog designs, each with its own personality while adhering to the color palette:

1. **Classic News** - Traditional news/magazine layout
2. **Minimalist** - Clean, simple design with ample white space
3. **Card-Based** - Content presented in card containers
4. **Grid Gallery** - Photo-focused grid layout
5. **Magazine** - Multi-column layout mimicking print magazines
6. **Tech Blog** - Modern, sleek design for tech content
7. **Personal Journal** - Warm, friendly design for personal stories
8. **Corporate** - Professional design for business blogs
9. **Creative Portfolio** - Showcase-style for creative work
10. **Long-form Reading** - Optimized for extended articles
11. **Video-Centric** - Design emphasizing video content
12. **Podcast/Audio** - Design focusing on audio content

## Responsive Design Strategy

Each blog sample will be built with a mobile-first approach using three breakpoints:

- Mobile: max-width 767px
- Tablet: min-width 768px and max-width 1199px
- Desktop: min-width 1200px

CSS will be organized in separate files for each breakpoint, following the provided pattern.

## Component Structure

Each blog sample will be composed of these core components:

- Header (logo and search)
- Featured Article
- Article List
- Sidebar (tags and popular articles)
- Footer

All components will use a consistent CSS class naming structure with a unique two-letter prefix for each blog sample.

## Data Structure

Sample data will be stored in JSON files and reused across all blog samples:
- Articles (with tags)
- Authors
- Categories (for backward compatibility)
- Comments

A unified DataContext provides access to all data, including processed tags extracted from articles.
