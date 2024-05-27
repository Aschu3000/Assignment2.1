import React, { useState } from 'react';

function CommentForm({ addComment }) {
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: comment }),
      });
      const data = await response.json();
      addComment(data);
      setComment('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Enter your comment"
        required
      />
      <button type="submit">Post Comment</button>
    </form>
  );
}

export default CommentForm;