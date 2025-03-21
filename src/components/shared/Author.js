import React from 'react';
import './Author.css';

const Author = ({ author, size = 'small' }) => {
  const { name, avatar, bio, social } = author;
  
  if (!author) return null;
  
  return (
    <div className={`author author-${size}`}>
      <div className="author-avatar">
        <img 
          src={`/images/avatars/${avatar}`} 
          alt={`${name}'s profile picture`} 
          className="author-image"
          onError={(e) => {
            e.target.src = '/images/avatars/default-avatar.jpg';
          }}
        />
      </div>
      <div className="author-info">
        <h3 className="author-name">{name}</h3>
        {size !== 'small' && <p className="author-bio">{bio}</p>}
        
        {size === 'large' && social && (
          <div className="author-social">
            {social.twitter && (
              <a href={`https://twitter.com/${social.twitter}`} className="social-link" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            )}
            {social.linkedin && (
              <a href={`https://linkedin.com/in/${social.linkedin}`} className="social-link" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            )}
            {social.website && (
              <a href={`https://${social.website}`} className="social-link" target="_blank" rel="noopener noreferrer">
                Website
              </a>
            )}
            {social.instagram && (
              <a href={`https://instagram.com/${social.instagram}`} className="social-link" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            )}
            {social.youtube && (
              <a href={`https://youtube.com/${social.youtube}`} className="social-link" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Author;