import {useState} from "react"

export const useLocalStorage = (key,initialData) => {
    const [localStorageData, setLocalStorageData] = useState(()=>{
        console.log(localStorage.getItem(key))
        if(localStorage.getItem(key)){
            return JSON.parse(localStorage.getItem(key))
        } else{
            localStorage.setItem(key,JSON.stringify(initialData))
            return initialData
        }
    })

    const settingLocalStorage = (value) => {
        setLocalStorageData(value)
        localStorage.setItem(key,JSON.stringify(value))
    }

    

    return [localStorageData, settingLocalStorage]
}

export const useDarkMode = (initialData) => {
    const [darkMode, setDarkMode] = useLocalStorage("Color", initialData)

    const changeColors = (e) => {
        e.preventDefault()
        setDarkMode(!darkMode)
    } 
    return [darkMode,changeColors]
}