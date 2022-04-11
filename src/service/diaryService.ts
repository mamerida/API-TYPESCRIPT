//utilizo el service para la ruta para repasar la logica de la ruta con la declaracion de la ruta en si misma 

import { DiaryEntry,NonSensitiveInfoDiaryEntry,  NewDiaryEntry } from '../types';
import diaryData from './diaries.json';

//diaryData as Array<DiaryEntry> al hacer esto hago incersion de tipos indicandole a TS que yo afirmo el comportamiento de ese json a
const diaries : Array<DiaryEntry> = diaryData as Array<DiaryEntry>

export const getEntries = (): Array<DiaryEntry> => diaries

//el find al poder devolver undefined debo indicarlo en los tipos de la funcion 

export const findById = (id:number) : NonSensitiveInfoDiaryEntry | undefined =>{
    const entry = diaries.find( d => d.id == id)   
    if(entry){
        const {comment, ...restOfDiary} = entry 
        return restOfDiary
    }

    return undefined
}

//si quiero devolver otro tipo de objeto basado en un objeto ya creado

export const getEntriesWithOutSensitiveInfo = () : Array<NonSensitiveInfoDiaryEntry> => {
    //debo filtrar la info para que en tiempo de compilacion llegue el filtro
    return diaries.map(({id,date,weather,visibility})=>{
        return{
            id,
            date,
            weather,
            visibility
        }   
    })
}

export const addDiary = (newDiaryEntry :NewDiaryEntry) : DiaryEntry => {
    const newDiary = {
        id: Math.max(...diaries.map(d => d.id)) + 1,
        ...newDiaryEntry
    }
    diaries.push(newDiary)
    return newDiary
} 
