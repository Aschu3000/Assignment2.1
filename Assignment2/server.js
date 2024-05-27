const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

//an empty array to store comments
let comments = [];

// Endpoint to fetch comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Endpoint to add a new comment
app.post('/comments', (req, res) => {
  const { text } = req.body;
  const newComment = { id: comments.length + 1, text };
  comments.push(newComment);
  res.json(newComment);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));