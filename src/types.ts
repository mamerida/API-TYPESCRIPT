// en este caso se definen los tipos en este archivo. Esto se puede hacer de otras maneras.
//en el alcance del proyecto se dejaran aqui todos los tipos

// export type Visibility = 'great' | 'good' | 'ok' | 'poor'

//PAra poder valorar los valores de un tipo creo un enum
//Esto crea un objeto por el cual yo puedo comparar como si fuera una constante 
export enum Weather {
    Sunny = 'sunny',
    Rainy  = 'rainy',
    Cloudy = 'cloudy',
    Windy = 'windy',
    Stormy = 'stormy'
}

export enum Visibility  {
    Great = "great",
    Good = "good",
    Ok = "ok",
    Poor = "poor"
}

export interface DiaryEntry {
    id:number,
    date:string,
    weather:Weather,
    visibility:Visibility,
    comment : string  
}

// para crear NonSensitiveInfoDiaryEntry nos basamos en DiaryEntry para evitar duplicar interfaces

// 1 forma con PICK

//export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility' >

// 2 forma con Omit

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry ,'comment'>

export type NewDiaryEntry = Omit<DiaryEntry ,'id'>

