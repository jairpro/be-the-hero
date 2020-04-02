const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
// app.use(cors({
//   origin: 'http://bethehero.jairpro.tk'
// }));

app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(3340);
