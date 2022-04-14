const {Pool} = require('pg');

const config = {
    user: 'postgres',
    host: 'localhost',
    password: '586709',
    database: 'plaza_chacharas'
}

const database = new Pool(config);

module.exports = {
    database
}
