import React,{ useState } from 'react'
import { SHOP_DATA } from "../../shop.data"
import PreviewCollection from "../../components/previewCollection/PreviewCollection"

import "./ShopStyles.scss"

export default function Shop() {
    const [collections] = useState(SHOP_DATA)
    return (
        <div className="shop-page">
            {collections.map(collection=>(<PreviewCollection key={collection.id} collection={collection} />))}
        </div>
    )
}
