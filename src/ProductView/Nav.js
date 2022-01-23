import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <nav id="detail" className='innerCon'>
            <ul>
                <li><Link to="/products">상품정보</Link></li>
                <li><Link to="/products/review">상품리뷰</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;