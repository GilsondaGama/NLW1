import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Servidor On Line');

  response.json(['Diego', 'Robson', 'Andreia', 'Marcelo']);
});

app.listen(3333);
