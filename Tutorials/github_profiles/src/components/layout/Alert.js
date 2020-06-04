import React,{useContext} from 'react'
import AlertContext from "../../context/alert/alertContext"

export default function Alert() {
    const {alert} = useContext(AlertContext)
    return (
        alert !== null && (
            <p style={{margin: "0", padding: "0", lineHeight: "0.3"}} className="text-danger">{alert}</p>
        )
    )
}
