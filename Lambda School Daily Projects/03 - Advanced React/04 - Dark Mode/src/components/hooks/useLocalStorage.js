import {useState} from "react"

function useLocalStorage(key, initialValues){
    const getLocalStorage = () => {
        if(localStorage.getItem(key)){
            return JSON.parse(localStorage.getItem(key))
        } else {
            localStorage.setItem(key,JSON.stringify(initialValues));
            return initialValues
        }
    }


    const [localStorageValue, setLocalStorageValue] = useState(getLocalStorage())

    const settingLocalStorage = (value) => {
        setLocalStorageValue(value)
        localStorage.setItem(key,JSON.stringify(value))
    }

    return [localStorageValue, settingLocalStorage]
}

export default useLocalStorage;