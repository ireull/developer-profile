export interface User {
    id:number;
    fullName: string;
    language:string;
    skills:Skill[]
    picture: string;
    portfolio:Portfolio[]
    location:string;
    locationMap:LocationMap[]
    samplCode?: string;
    availability:string;
    environment: Environment[];
    favoriteQuotes : Quote[];
}

export interface Skill {
    name:string;
    exp?:number;
}

export interface Portfolio {
    title:string;
    url:string;
}

export type Environment = string;

export interface Quote {
    id:number;
    title:string;
    text:string;
}

export interface IMap {
    lng:string;
    lat:string;
}

export interface LocationMap {
    lat:number;
    lng:number;
}