import { NewDiaryEntry, Visibility, Weather } from "./types";

const isString = (string:string) : boolean =>{
    return typeof string === 'string';
}

const isDate = (date:string):boolean =>{
    return Boolean(Date.parse(date))
}

const isWeather = (param:any):boolean =>{

    return Object.values(Weather).includes(param)

}

const isVisibility = (param:any):boolean =>{
    return Object.values(Visibility).includes(param)
} 

const parseComment =  (commentFormRequest : any) : string =>{
    if(!isString(commentFormRequest)){
        throw new Error('Incorrect or missing comment')
    }

    return commentFormRequest
}

const parseDate = (dateFromRequest :any):string =>{
    if(!isString(dateFromRequest) || !isDate(dateFromRequest)){
        throw new Error('Incorrect or missing date')
    }

    return dateFromRequest;    
}

const parseWeather = (waetherFromRequest :any):Weather =>{
    if(!isString(waetherFromRequest) || ! isWeather(waetherFromRequest)){
        throw new Error('Incorrect or missing Weather')
    }

    return waetherFromRequest;
}

const parseVisibility = (visibilityRequest : any ) : Visibility =>{
    if(!isString(visibilityRequest) || ! isVisibility(visibilityRequest)){
        throw new Error('Incorrect or missing Visibility')
    }

    return visibilityRequest;
}

const toNewDiaryEntry = (object:any):NewDiaryEntry =>{
    const NewEntry : NewDiaryEntry = {
        comment:parseComment(object.comment),
        date:parseDate(object.date),
        weather:parseWeather(object.weather),
        visibility:parseVisibility(object.visibility)
    }

    return NewEntry;
}

export default toNewDiaryEntry