import React from 'react';
import './Comment.css';

const Comment = ({ comment }) => {
  if (!comment) return null;
  
  const { author, avatar, content, date, likes } = comment;
  
  // Format date
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <div className="comment">
      <div className="comment-avatar">
        <img 
          src={`/images/avatars/${avatar}`} 
          alt={`${author}'s avatar`} 
          className="comment-avatar-image"
          onError={(e) => {
            e.target.src = '/images/avatars/default-avatar.jpg';
          }}
        />
      </div>
      
      <div className="comment-content">
        <div className="comment-header">
          <h4 className="comment-author">{author}</h4>
          <span className="comment-date">{formattedDate}</span>
        </div>
        
        <p className="comment-text">{content}</p>
        
        <div className="comment-footer">
          <button className="comment-like-button">
            <span className="comment-like-icon">♥</span>
            <span className="comment-like-count">{likes}</span>
          </button>
          <button className="comment-reply-button">Reply</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;