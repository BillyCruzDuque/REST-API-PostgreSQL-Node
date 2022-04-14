require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

// lectura y parseo del body
app.use( express.json() );

app.use(
    '/api/usuarios',
    require('./routes/usuarios')
)

app.use(
    '/api/login',
    require( './routes/auth' )
);

app.listen(process.env.PORT, () => {
    console.log("Servidor corriendo en el puerto: " + process.env.PORT);
});