<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDpMTW3EY4ov4n3-xtiwFiBL_UBP6XnZBE",
    authDomain: "my-news-blog-dab9a.firebaseapp.com",
    projectId: "my-news-blog-dab9a",
    storageBucket: "my-news-blog-dab9a.firebasestorage.app",
    messagingSenderId: "795831633960",
    appId: "1:795831633960:web:446fb6535a493929674d1d",
    measurementId: "G-SCCZG3WR8G"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
