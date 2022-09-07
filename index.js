const express = require('express');
const path = require('path');
const routes = require('./src/routes/router');
const bodyParser = require('body-parser');
require('dotenv').config();


const app = express();
const db = require('./src/database/connection');

db.connect();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({  extended: false }));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use('/', routes);




const port = process.env.PORT || 8080;
app.listen(port, ()=> console.log(`O servidor está rodando na porta ${port}`));