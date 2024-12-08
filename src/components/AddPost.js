import React, { useState } from 'react';
import { writePost } from '../firebase/database';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && content) {
      try {
        await writePost(title, content);
        setMessage('Post added successfully!');
        setTitle('');
        setContent('');
      } catch (error) {
        setMessage('Error adding post');
      }
    } else {
      setMessage('Please fill in all fields');
    }
  };

  return (
    <div>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Add Post</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddPost;
