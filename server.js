const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
// Express HBS
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
 
app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Welcome'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'About Us'
    });
});
 
app.listen(port, function() {
    console.log(`escuchando peticiones en el puerto ${port}`);
});