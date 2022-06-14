import { useEffect, useState } from 'react'

export const useLocalStorage = (initValue,key) => {
    const getValue = () => {
        const storage = localStorage.getItem(key);

        if(storage){
            return JSON.parse(storage);
        }
        
        return initValue
    }

    const [value,setValue] = useState(getValue);

    useEffect(() => {
        localStorage.setItem(key,JSON.stringify(value))
    },[value])

    return [value,setValue];
}

