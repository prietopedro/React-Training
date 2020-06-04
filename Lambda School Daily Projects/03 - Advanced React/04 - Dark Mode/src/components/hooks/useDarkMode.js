import useLocalStorage from "./useLocalStorage";

function useDarkMode(initialValues){
    const [darkMode , setDarkMode] = useLocalStorage("color", initialValues)

    function changeColors(e){
        e.preventDefault()
        setDarkMode(!darkMode)
    }

    return [darkMode, setDarkMode, changeColors]
}

export default useDarkMode;