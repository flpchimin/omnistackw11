const express = require('express');

const app = express();

app.get('/', (request, response) => {
    //return response.send('Hello World');
    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Felipe Chimin'
    });
});

app.listen(3333);