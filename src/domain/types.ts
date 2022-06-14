interface User {
    id:number;
    fullName: string;
    language:string;
    skills:Skill[]
    picture: string;
    portfolio:Portfolio[]
    location:Location[];
    samplCode: string;
    availability:string;
    environment: Environment[];
    favoriteQuotes : Quote[];
}

interface Skill {
    name:string;
    exp?:number;
}

interface Portfolio {
    title:string;
    url:string;
}

interface Location {
    long:string;
    lat:string;
}

type Environment = string;

interface Quote {
    title:string;
    text:string;
}

interface IMap {
    lng:string;
    lat:string;
}