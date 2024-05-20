const express = require('express');
const app = express();

const people = require('./routes/people');
const auth = require('./routes/auth');

// static assets
app.use(express.static('../methods-public'));

// parse form data
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(express.json());

// Router
app.use('/api/people', people);
app.use('/login', auth);

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

const port = 5000;

if (require.main === module) {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
  
  module.exports = app;