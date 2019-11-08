import React from 'react'
import "./menu-item.scss"

export default function MenuItem({section}) {
    return (
        <div className={`${section.size} menu-item`}>
            <div style={{backgroundImage: `url(${section.imageUrl})`}} className='background-image'></div>
                <div className="content">
                    <h1 className="title">{section.title.toUpperCase()}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
        </div>
    )
}

