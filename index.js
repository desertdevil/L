const express = require('express');
const app = express();
const sqlite = require('sqlite');

app.set('views', __dirname + '/views');
app.set('view engine', 'twig');

app.use(require('body-parser').urlencoded({ extended: true }));

const dbPromise = sqlite.open('./data.sqlite');

app.get('/', async function (req, res){
  res.render('index');
});


app.listen(3000, () => console.log('app listening on http://localhost:3000'));
