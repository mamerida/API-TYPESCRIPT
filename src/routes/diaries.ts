import  express from "express";
import * as diaryServices from '../service/diaryService';
import toNewDiaryEntry from '../utils';

const router = express.Router();

//obtiene entradas
router.get('/',(_req,res) =>{
    res.send(diaryServices.getEntriesWithOutSensitiveInfo())
});

router.get('/:id',(req,res) =>{
    const diary = diaryServices.findById( +req.params.id) // al colocarle el + se transforma automaticamente
    // res.send(diary?.comment) // al colocarle diary? indica que puede existir o no 
    return diary 
    ? res.send(diary)
    : res.sendStatus(404)
});


//agrega entradas
router.post('/',(req,res) =>{
    try{
        const newDiaryEntry = toNewDiaryEntry(req.body)
        const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)
        res.json(addedDiaryEntry)
    }catch(e:any){
        res.status(400).send(e.message)
    }  
});

export default router;

//Al verificar en la creacion el objeto antes de hacer de ir al servise ya no es necesario verificar el tipo 
// const addedDiaryEntry = diaryServices.addDiary({
//     date,
//     weather,
//     visibility,
//     comment
// })