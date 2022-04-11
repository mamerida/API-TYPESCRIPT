import express from 'express'; //EsModules
import diaryRouter from './routes/diaries';

const app = express();

app.use(express.json()) //middleware que transforma req.body a un json 

const PORT = 3000;

app.get('/ping',(_req,res) =>{ //se coloca el _ y el nombre de la variable para indicar que lo ignore

    console.log("hello someone pinged here");
    res.send('pong') 
})

//para la rua '/api/diaries' utiliza diaryRouter

app.use('/api/diaries',diaryRouter)

app.listen(PORT , () =>{
    console.log(` el servidor esta en el puerto ${PORT}`) 
}) 
