interface User {
    id:number;
    fullName: string;
    language:string;
    skills:ISkill[]
    picture: string;
    portfolio:IPortfolio[]
    location:ILocation[];
    samplCode: string;
    availability:string;
    environment: Environment[];
    favoriteQuotes : IQuote[];
}

interface ISkill{
    name:string;
    exp?:number;
}

interface IPortfolio{
    title:string;
    url:string;
}

interface ILocation{
    long:string;
    lat:string;
}

type Environment = string;

interface IQuote {
    title:string;
    text:string;
}
interface IMap {
    long:string;
    lat:string;
}