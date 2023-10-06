// Create web server
// 1. Create a web server application
// 2. Create a route for comments
// 3. Create an array of comments
// 4. Return the array of comments to the browser
// 5. Test the web server application
// 6. Create a route for adding comments
// 7. Test the web server application
// 8. Create a route for deleting comments
// 9. Test the web server application

// 1. Create a web server application
// 1.1. Import the express module
const express = require('express');
// 1.2. Create a web server by calling the express function
const app = express();
// 1.3. Specify the port number 3000
const port = 3000;

// 2. Create a route for comments
// 2.1. Create a route for GET request with path '/comments'
app.get('/comments', (req, res) => {
  // 2.2. Create an array of comments
  const comments = [
    { id: 1, author: 'author1', body: 'body1' },
    { id: 2, author: 'author2', body: 'body2' },
    { id: 3, author: 'author3', body: 'body3' },
  ];
  // 2.3. Return the array of comments to the browser
  res.json(comments);
});

// 6. Create a route for adding comments
// 6.1. Create a route for POST request with path '/comments'
app.post('/comments', (req, res) => {
  // 6.2. Create an array of comments
  const comments = [
    { id: 1, author: 'author1', body: 'body1' },
    { id: 2, author: 'author2', body: 'body2' },
    { id: 3, author: 'author3', body: 'body3' },
  ];
  // 6.3. Add a new comment to the array of comments
  comments.push({
    id: 4,
