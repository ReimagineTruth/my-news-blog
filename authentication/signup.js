import { createUserWithEmailAndPassword } from 'firebase/auth';

const email = "user@example.com";
const password = "yourpassword";

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("User signed up: ", user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error during signup: ", errorCode, errorMessage);
  });
