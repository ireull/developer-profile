import { User} from "../domain/types";

export const DeveloperData:User = {
    id:1,
    fullName: 'John Smith',
    language:'English',
    skills:  [
        { name: "Ruby", exp: 2 },
        { name: "PHP", exp: 6 },
        { name: "JavaScript", exp: 4 },
      ],
    portfolio:[
        {title:'Bootstrap 4 Material Design (Sample Link)' , url:'!#'},
        {title:'Modern JavaScript stack' , url:'!#'},
        {title:'Datepicker for twitter bootstrap' , url:'!#'},
        {title:'Fast and reliable Bootstrap widgets in Angular' , url:'!#'},
    ],
    location: 'Portland, Oregon, USA',
    locationMap:[{lat:45.515259,lng:-122.678377}],
    samplCode: 'code.png',
    availability:'Full-time',
    environment: ['GitHub','Mac OSX'],
    favoriteQuotes : [
        {id:1,title:'The Most Amaizing...', text: 'The only true wisdom is in knowing you know nothing...'},
        {id:2,title:'In clients I look for...', text: 'There is only one good, knowledge, and one evil, ignorance.'},
    ],
    picture:'user.png',
}

