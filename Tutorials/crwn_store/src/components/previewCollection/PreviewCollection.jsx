import React from 'react'
import CollectionItem from "../collectionItem/CollectionItem"
import "./collection-preview.scss"

export default function PreviewCollection({collection}) {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{collection.title.toUpperCase()}</h1>
            <div className='preview'>
                {collection.items
                    .filter((item , i)=> i < 4)
                    .map((item)=>(<CollectionItem key={item.id} item={item} />))
                }
            </div>
        </div>
    )
}
