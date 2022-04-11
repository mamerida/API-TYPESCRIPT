import  express from "express";

const router = express.Router();

//obtiene entradas
router.get('/',(_req,res) =>{
    res.send('Fetching all entry diaries')
});

//agrega entradas
router.post('/',(_req,res) =>{
    res.send('Saving a diary')
});

export default router;