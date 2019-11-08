import React,{ useState } from 'react'
import "./directory.scss"
import {data} from "../../directory.data"

import MenuItem from "../menu-item/MenuItem"

export default function Directory() {
    const [ sections ] = useState(data)
    return (
        <div className="directory-menu">
            {sections.map(section=>(<MenuItem key={section.id} section={section} />))}
        </div>
    )
}
