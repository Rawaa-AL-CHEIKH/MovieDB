// Importer Express
const express = require('express');

// Créer une application Express
const app = express();

// Définir une route simple
app.get('/', (req, res) => {
  res.send('Bonjour, le serveur fonctionne !');
});

//ex2 make it so this express server, when receiving an url, answers ok
app.get('*', (req, res) => {
    res.send('OK'); 
  });

// Démarrer le serveur sur le port 3000
app.listen(3000, () => {
  console.log(`Serveur en écoute sur le port 3000}`);
});

