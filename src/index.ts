import express from 'express';

const app = express();

app.use(express.json()) //middleware que transforma req.body a un json 

const PORT = 3000;

app.get('/ping',(_req,res) =>{ //se coloca el _ y el nombre de la variable para indicar que lo ignore

    console.log("hello someone pinged here");
    res.send('pong') 
})

app.listen(PORT , () =>{
    console.log(` el servidor esta en el puerto ${PORT}`) 
}) 
