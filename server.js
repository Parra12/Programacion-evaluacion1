const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Configuración EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// funcion -- leer formularios
app.use(express.urlencoded({ extended: true }));

// muestra de ruta principal
app.get('/', (req, res) => {
  res.render('index');
});

// mostración de  la ruta que recibe el animal
app.post('/animal', (req, res) => {
  const animal = req.body.animal.trim() || 'misterioso';
  res.render('resultado', { animal });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});