const { readFile } = require('fs').promises;

const express = require('express');
const app = express();

app.get('/', async (request, response) => {

    response.send( await readFile('./home.html', 'utf8') ); 

    if (err){
        response.status(500).send('sorry, out of order')
    }
});

app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))
