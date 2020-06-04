import React from 'react'
import "./collections-overview.styles.scss"
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import PreviewCollection from "../previewCollection/PreviewCollection"
import { selectShopCollectionsForPreview } from "../../redux/Shop/ShopSelector"

function CollectionOverview({collections}) {
    return (
        <div classname="collection-overview">
            {collections.map(collection=>(<PreviewCollection key={collection.id} collection={collection} />))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)