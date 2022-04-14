const {response} = require('express');
const {database} = require('../database/config');

const login = async (req, res = response) => {
    const {email, password} = req.body;

    const text = "Select * from usuario where email = $1 AND password = $2";

    const values = [email, password];

    try {

        await database.query(text, values);


        res.json({
            ok: true,
            msg: "usuario encontrado"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado... Revisar logs'
        });
    }
}

module.exports = {
    login
}