// /src/firebase/database.js
import { ref, set, push } from 'firebase/database';
import { database } from './firebaseConfig';

// Function to add a new blog post
export const writePost = (title, content) => {
  const postId = push(ref(database, 'posts')).key; // Auto-generate post ID
  set(ref(database, 'posts/' + postId), {
    title: title,
    content: content,
    timestamp: Date.now()
  }).then(() => {
    console.log("Post added successfully!");
  }).catch((error) => {
    console.error("Error writing post: ", error);
  });
};

// Function to fetch all blog posts
export const getPosts = (callback) => {
  const postsRef = ref(database, 'posts/');
  postsRef.once('value', snapshot => {
    if (snapshot.exists()) {
      callback(snapshot.val());
    } else {
      console.log("No posts available.");
    }
  });
};
writePost
getPosts
