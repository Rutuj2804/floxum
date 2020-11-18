import React from 'react'
import { NavLink } from 'react-router-dom';
import './GroupInternalNavigation.scss';

function GroupInternalNavigation() {
    return (
        <div className="groupInternalNavigation">
            <div className="group__links">
                <NavLink to="/group/1" activeClassName="activeGroupLink">Main</NavLink>
                <NavLink to="/group/1/photos" activeClassName="activeGroupLink">Photos</NavLink>
                <NavLink to="/group/1/videos" activeClassName="activeGroupLink">Videos</NavLink>
                <NavLink to="/group/1/members" activeClassName="activeGroupLink">Members</NavLink>
            </div>
        </div>
    )
}

export default GroupInternalNavigation
