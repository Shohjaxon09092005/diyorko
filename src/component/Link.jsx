import React from 'react'
import { NavLink } from 'react-router-dom'

function Link() {
    return (
        <div>
            <div className="link">
                <ul>
                    <li><NavLink to="/">1 Page</NavLink></li>
                    <li><NavLink to="/two">2 Page</NavLink></li>
                    <li><NavLink to="/three">3 Page</NavLink></li>
                    <li><NavLink to="four">4 Page</NavLink></li>
                    <li><NavLink to="/five">5 Page</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Link
