import  express from "express";
import * as diaryServices from '../service/diaryService';

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
    const { date, weather,visibility,comment} = req.body
    const newDiaryEntry = diaryServices.addDiary({
        date,
        weather,
        visibility,
        comment
    })

    res.json(newDiaryEntry)
});

export default router;