const express = require("express");
const app = express();
const bodyparser = require("body-parser");


//CREAMOS LA CONEXIÓN A LA BASE DE DATOS
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'api'
});
const port = 8000;
app.get("/", (req, res) => {
    res.json({ message: 'Pagina de Prueba' })
})




/*CONSULTAR POSTS*/
app.get("/get", (request, response) => {

    connection.query('SELECT * FROM posts ORDER BY id ASC', (err, rows) => {
        if (err) throw err;

        response.json({ data: rows })

    });
})


/*CONSULTAR POSTS POR ID*/
app.get("/get-id", (request, response) => {
    const req = request.query
    connection.query('SELECT * FROM posts where id=?', [req.id], (err, rows) => {
        if (err) throw err;

        response.json({ data: rows })

    });

})

/*CREAR POSTS*/
app.get("/post", (request, response) => {
    const req = request.query
    const query = "INSERT INTO posts SET ?";
    var CURRENT_TIMESTAMP = mysql.raw('now()');
    const params = { nombre: req.nombre, fecha: req.fecha, publicacion: req.publicacion}
    connection.query(query, params, (err, result, fields) => {
        if (err) throw err;

        response.json({ saved: result.affectedRows, inserted_id: result.insertId })

    });
})


/*ACTUALIZAR  POSTS*/
app.get("/update", (request, response) => {
    const req = request.query
    const query = "UPDATE posts SET name=? ,date=? ,publication=? where id=?";
    const params = [req.mobile, req.name]
    connection.query(query, params, (err, result, fields) => {
        if (err) throw err;

        response.json({ updated: result.affectedRows })

    });
})


/*ELIMINAR  POSTS*/
app.get("/delete-posts", (request, response) => {
    const req = request.query
    const query = "DELETE FROM posts where id=?";
    const params = [req.id]
    connection.query(query, params, (err, result, fields) => {
        if (err) throw err;

        response.json({ deleted: result.affectedRows })

    });
})
 

app.listen(port, () => {
    console.log(`Ejecutando Aplicacion Por ${port}`);
});