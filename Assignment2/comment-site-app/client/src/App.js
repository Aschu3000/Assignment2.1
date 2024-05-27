import React, { useState, useEffect } from 'react';
import CommentForm from './CommentForm';

function App() {
  //the state for storing comments
  const [comments, setComments] = useState([]);
  
  //fetch comments when the component mounts
  useEffect(() => {
    fetchComments();
  }, []);

  //function for fetching comments from the backend
  const fetchComments = async () => {
    try {
      const response = await fetch('http://localhost:5000/comments');
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  //add a new comment
  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div>
      <h1>Post Comments</h1>
      <CommentForm addComment={addComment} />
      <h2>Comments:</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;