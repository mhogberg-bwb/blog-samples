import React from 'react';

const Sidebar = ({ categories, popularPosts, tags }) => {
  return (
    <aside className="blog-sidebar">
      {/* About Section */}
      <div className="blog-sidebar-section">
        <h3 className="blog-sidebar-heading">About</h3>
        <div className="blog-sidebar-content">
          <p className="blog-sidebar-text">Welcome to our blog! Here we share insights on various topics.</p>
        </div>
      </div>
      
      {/* Categories Section */}
      {categories && categories.length > 0 && (
        <div className="blog-sidebar-section">
          <h3 className="blog-sidebar-heading">Categories</h3>
          <ul className="blog-sidebar-list">
            {categories.map((category) => (
              <li key={category.id} className="blog-sidebar-list-item">
                <a href={`/category/${category.slug}`} className="blog-sidebar-link">
                  {category.name}
                  {category.count && <span className="blog-sidebar-count">({category.count})</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Popular Posts Section */}
      {popularPosts && popularPosts.length > 0 && (
        <div className="blog-sidebar-section">
          <h3 className="blog-sidebar-heading">Popular Posts</h3>
          <div className="blog-sidebar-popular-list">
            {popularPosts.map((post) => (
              <div key={post.id} className="blog-sidebar-popular-item">
                {post.image && (
                  <div className="blog-sidebar-popular-image-container">
                    <a href={`/article/${post.id}`}>
                      <img src={post.image} alt={post.title} className="blog-sidebar-popular-image" />
                    </a>
                  </div>
                )}
                <div className="blog-sidebar-popular-content">
                  <a href={`/article/${post.id}`} className="blog-sidebar-popular-title">
                    {post.title}
                  </a>
                  <span className="blog-sidebar-popular-date">{post.publishDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Tags Section */}
      {tags && tags.length > 0 && (
        <div className="blog-sidebar-section">
          <h3 className="blog-sidebar-heading">Tags</h3>
          <div className="blog-sidebar-tag-list">
            {tags.map((tag) => (
              <a key={tag.id} href={`/tag/${tag.slug}`} className="blog-sidebar-tag-link">
                {tag.name}
              </a>
            ))}
          </div>
        </div>
      )}
{/*       
      {/* Newsletter Subscribe Section 
      <div className="blog-sidebar-section">
        <h3 className="blog-sidebar-heading">Subscribe</h3>
        <form className="blog-sidebar-form">
          <p className="blog-sidebar-text">Get the latest posts delivered straight to your inbox.</p>
          <div className="blog-sidebar-form-group">
            <input type="email" placeholder="Your email address" className="blog-sidebar-input" required />
          </div>
          <button type="submit" className="blog-sidebar-button">Subscribe</button>
        </form>
      </div> */}
    </aside>
  );
};

export default Sidebar;