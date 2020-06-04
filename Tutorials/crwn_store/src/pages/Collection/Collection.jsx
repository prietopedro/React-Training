import React from 'react'
import "./collection.styles.scss"
import CollectionItem from "../../components/collectionItem/CollectionItem"
import {connect} from 'react-redux'
import "./collection.styles.scss"
import {selectCollection} from "../../redux/Shop/ShopSelector"


function Collection({collection}) {
    return (
        <div className="collection-page">
            <h2 className="title">{collection.title}</h2>
            <div className="items">
                {
                    collection.items.map(item=>(<CollectionItem key={item.id} item={item} />))
                }
            </div>
        </div>
    )
}


const mapStateToProps = (state,ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(Collection)