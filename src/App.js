import React from 'react';
import AddPost from './components/AddPost';
import DisplayPosts from './components/DisplayPosts';

const App = () => {
  return (
    <div className="App">
      <h1>My Blog</h1>
      <AddPost />
      <DisplayPosts />
    </div>
  );
};

export default App;

import './App.css';
