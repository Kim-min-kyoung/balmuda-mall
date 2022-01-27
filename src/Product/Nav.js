import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul className='nav innerCon'>
                <li><Link to="/product">ALL</Link></li>
                <li><Link to="/product/air">AIR</Link></li>
                <li><Link to="/product/kitchen">KITCHEN</Link></li>
                <li><Link to="/product/lighting">LIGHTING</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;