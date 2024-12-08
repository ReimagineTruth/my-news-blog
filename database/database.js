// /src/firebase/database.js
import { ref, set } from 'firebase/database';
import { database } from './firebaseConfig';

// Function to write a new blog post to Realtime Database
export const writePost = (postId, title, content) => {
  set(ref(database, 'posts/' + postId), {
    title: title,
    content: content,
    timestamp: Date.now()
  })
  .then(() => {
    console.log("Post added successfully!");
  })
  .catch((error) => {
    console.error("Error writing post: ", error);
  });
};
