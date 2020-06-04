import React from 'react'
import CollectionOverview from "../../components/CollectionOverviews/CollectionOverview"
import {Route} from "react-router-dom"
import Collection from "../Collection/Collection"

export default function Shop({match}) {
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverview}/>
            <Route path={`${match.path}/:collectionId`} component={Collection} />
        </div>
    )
}


