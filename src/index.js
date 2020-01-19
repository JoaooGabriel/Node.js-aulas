const express = require('express'); //Importando a blibioteca express
const mongoose =require('mongoose');
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://joaog15:gabrielcaetano15@cluster0-iy1dd.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);