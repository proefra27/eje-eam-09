//Declaraciones
const express = require("express");
const app = express();//Responder solicitudes de clientes = Chrome, Safari, Insomnia, etc
const port = process.env.PORT || 3000; //Para cuando realizemos en Deploy (depliegue)

//Configuraciones
app.use(express.static('public'));

//Para obtener un recurso del servidor http://localhost:3000
app.get("/",(req,res)=>{
    res.send('Servidor web con Node.js y express');
})

//Para obtener un recurso del servidor http://localhost:3000/productos
app.get("/productos",(req,res)=>{
   res.send("Esta seria en teoria la pagina de productos");
})

app.get("*",(req,res)=>{
    res.send("404 | Pagina no encontrada");
})

//Proceso
app.listen(port,()=>{
    console.log("Servidor en Node.js con express escuchando en el puerto",port);
})
