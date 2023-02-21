const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Olá, mundo! RENAN TU É O CARA' });
});

app.listen(3001, () => {
  console.log('Servidor iniciado na porta 3001');
});