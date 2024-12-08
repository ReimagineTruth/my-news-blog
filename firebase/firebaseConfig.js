// /src/firebase/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  databaseURL: "https://your-database-name.firebaseio.com",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
  measurementId: "your-measurement-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const database = getDatabase(app);

export { database };
