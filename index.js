const express = require('express');
const path = require('path');
const cors = require('cors');
const routes = require('./src/routes/router');

require('dotenv').config();


const app = express();
const db = require('./src/database/connection');


app.use(cors())
db.connect();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({  extended: false }));
app.use('/', routes);




const port = process.env.PORT || 443;
app.listen(port , ()=> console.log(`O servidor está rodando na porta ${port}`));