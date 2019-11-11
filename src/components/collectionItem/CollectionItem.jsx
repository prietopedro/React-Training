import React from 'react'
import "./collection-item.styles.scss"
import CustomButton from '../CustomButton/CustomButton'
import {connect} from "react-redux"

import {addItem} from "../../redux/Cart/CartActions"

function CollectionItem({item , addItem}) {
    return (
        <div className='collection-item'>
            <div 
                className='image'
                style={{backgroundImage: `url(${item.imageUrl})`}}
                />
            <div className='collection-footer'>
                <span className='name'>{item.name}</span>
                <span className='price'>{item.price}</span>
            </div>
            <CustomButton inverted onClick={(e)=>addItem(item)}>Add to cart</CustomButton>
        </div>
    )
}

export default connect(null,{addItem})(CollectionItem)