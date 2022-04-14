const {response } = require('express');

const {database} = require('../database/config');

const getUsuario = async (req, res) => {
    const response = await database.query('Select * from usuario');
    console.log(response.rows);
    res.json({
        ok: true,
        response,
        msg: 'Todos los usuarios'
    });
}

const postUsuario = async (req, res = response) => {
    const {email, password, nombre, direccion} = req.body;

    const text = "INSERT INTO usuario(email, password, nombre, direccion) VALUES($1, $2, $3, $4) RETURNING *";

    const values = [email, password, nombre, direccion];

    try{
        await database.query(text, values);

        res.json({
            ok: true,
            msg: 'Usuario Agregado'
        });

    }catch (err){
        console.error(err);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado... Revisar logs'
        });
    }

}

const putUsuario = async (req, res = response) =>{

    const {email, password, nombre, direccion, id} = req.body;

    const text = "UPDATE usuario SET email = $1, password = $2, nombre = $3, direccion = $4 WHERE id = $5";

    const values = [email, password, nombre, direccion, id];

    try{
        await database.query(text, values);

        res.json({
            ok: true,
            msg: 'Usuario Actualizado'
        });
    }catch (err){
        console.error(err);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado... Revisar logs'
        });
    }
}

const deleteUsuario = async (req, res = response) => {
    const id = req.params.id;

    console.log(id);

    const text = "DELETE FROM usuario WHERE id = $1";

    const values = [id];

    try{
        await database.query(text, values);


        res.json({
            ok: true,
            msg: 'Usuario Eliminado'
        });
    }catch (err){
        console.error(err);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado... Revisar logs'
        });
    }
}

module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario
}