console.log(__dirname + '/../public');

const path = require('path');
const publicPath = path.join(__dirname + '/../public');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));


app.listen(3000, () => {
  console.log(`Listening on port ${port}`);
})

console.log(publicPath)
