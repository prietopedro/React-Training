import React from 'react'
import { withRouter } from 'react-router-dom'

import "./menu-item.scss"

function MenuItem({section , history}) {
    return (
        <div className={`${section.size} menu-item`} onClick={()=>history.push(`/shop/${section.title}`)}>
            <div style={{backgroundImage: `url(${section.imageUrl})`}} className='background-image'></div>
                <div className="content">
                    <h1 className="title">{section.title.toUpperCase()}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
        </div>
    )
}

export default withRouter(MenuItem)
