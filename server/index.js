const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

//Controllers
const controller = require('./controlller');

//Destruct .ENV
let {
    CONNECTION_STRING
} = process.env;

//Invoking our express wrapper and using body parser in JSON format
const app = express();
app.use(bodyParser.json());

//Database Connection
massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
    console.log('Database connected yo!')
}).catch(error => {
    console.log('Db did not connect:', error);
});

//Endpoints
app.get('/api/inventory', controller.getAll);
app.post('/api/product', controller.newProduct);
app.delete('/api/product/:id', controller.removeProduct);
app.get('/api/product/:id', controller.getProduct);

app.listen(3001, () => {
    console.log('server is running')
})