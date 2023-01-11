import React , {useState}from 'react'
import OpenSidebar from './OpenSidebar'
import ClosedSidebar from './ClosedSidebar'
const Sidebar = ({toggleBar, setToggleBar}) => {
    return(
        toggleBar?<OpenSidebar/> : <ClosedSidebar/>
    )
}

export default Sidebar