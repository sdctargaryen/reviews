const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router.js');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', router);
app.use('/loaderio-f99d75f4c568f49d084806e3d0e9e274', (req, res) => {res.status(200).send('loaderio-f99d75f4c568f49d084806e3d0e9e274')})

const port = 1143;

app.listen(port, () => console.log(`Server up on ${port}`));