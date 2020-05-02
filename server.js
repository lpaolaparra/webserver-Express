const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

//variables de entorno globales para heoroku
const port =  process.env.PORT || 3000;



//importar archivo de helpers

// un middleware es un callback o una funcion que se va
// a ejecutar sin importar la peticion que el usario haga
//foldel publico o estatico

app.use(express.static( __dirname + '/public'));


//Express HBS engine
hbs.registerPartials( __dirname + '/views/parciales');
app.set('view engine','hbs');

 app.get('/', (req, res) => {
  
    res.render('home',{
        nombre: 'Lizeth',
        
    });

});

app.get('/about', (req, res) => {
  
    res.render('about');

});

app.get('/data', (req, res) => {
    res.send('Hello from data'); 
});

app.listen(port,()=>{
    console.log(`Escuchando peticiones en el puerto ${port}`);
});