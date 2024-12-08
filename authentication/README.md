
# 🔐 **Authentication for My News Blog**

This directory contains the code and configuration for the **authentication system** of the **My News Blog** project. The authentication module handles user registration, login, and session management to ensure secure access to blog features.

## 📋 **Features**

- **User Registration**: Allow users to sign up with an email and password.
- **User Login**: Secure login with email and password verification.
- **Session Management**: Persistent sessions with cookie-based authentication.
- **Password Encryption**: Passwords are securely hashed using bcrypt.
- **Access Control**: Restrict certain blog features to logged-in users only.

## 🛠️ **Technologies Used**

- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Encryption**: bcrypt for password hashing
- **Session Management**: express-session
- **API Testing**: Postman

## 📦 **Directory Structure**

```
authentication/
├── controllers/
│   └── authController.js    # Handles registration, login, logout
├── models/
│   └── User.js              # User schema and model
├── routes/
│   └── authRoutes.js        # Authentication routes (signup, login, logout)
├── middleware/
│   └── authMiddleware.js    # Middleware to protect routes
└── README.md                # Documentation
```

## 🚀 **Setup Instructions**

### 1. **Clone the Repository**

```bash
git clone https://github.com/yourusername/my-news-blog.git
cd my-news-blog/authentication
```

### 2. **Install Dependencies**

Install the necessary dependencies:

```bash
npm install
```

### 3. **Environment Variables**

Create a `.env` file in the root of the `authentication` directory and add the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
```

### 4. **Run the Server**

Start the authentication server:

```bash
node server.js
```

The server should be running on `http://localhost:5000`.

## 🔄 **API Endpoints**

### **1. Register a New User**

- **Endpoint**: `POST /api/auth/register`  
- **Request Body**:  
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "password123"
  }
  ```

### **2. Login a User**

- **Endpoint**: `POST /api/auth/login`  
- **Request Body**:  
  ```json
  {
    "email": "johndoe@example.com",
    "password": "password123"
  }
  ```

### **3. Logout a User**

- **Endpoint**: `POST /api/auth/logout`

## 🛡️ **Middleware**

- **`authMiddleware.js`**: Protects routes by checking if the user is authenticated.

Usage example:

```javascript
const { ensureAuthenticated } = require('../middleware/authMiddleware');

router.get('/dashboard', ensureAuthenticated, (req, res) => {
  res.send('Welcome to your dashboard');
});
```

## 🐞 **Troubleshooting**

- **Database Connection Issues**: Check if your MongoDB URI in `.env` is correct.
- **Session Errors**: Ensure the `SESSION_SECRET` is set in your environment variables.

## 🤝 **Contributing**

We welcome contributions to improve the authentication system. Please refer to the [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines.

## 📜 **License**

This project is licensed under the MIT License. See the [LICENSE](../LICENSE) file for details.

---

🔒 *Secure your blog. Secure your users.*
