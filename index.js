const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Olá, mundo!1' });
});

app.listen(3001, () => {
  console.log('Servidor iniciado na porta 3000');
});