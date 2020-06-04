import React,{ useState } from 'react'
import "./directory.scss"
import {data} from "../../directory.data"
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectSections} from "../../redux/Directory/DirectorySelectors"

import MenuItem from "../menu-item/MenuItem"

function Directory({sections}) {
    return (
        <div className="directory-menu">
            {sections.map(section=>(<MenuItem key={section.id} section={section} />))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectSections
})
export default connect(mapStateToProps)(Directory)