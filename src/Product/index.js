import React from 'react';
import Header from './Header';
import Nav from './Nav';
import All from './All';
import { Link, Routes, Route } from 'react-router-dom';
import Kitchen from './Kithcen';
import ProductCreate from './ProductCreate';

function index(props) {
    return (
        <div id="productBoard">
            <Header />
            {/* <Nav /> */}
            <Routes>
                <Route path="/" element={<All />} />
                <Route path="/kitchen" element={<Kitchen />} />
                <Route path="/create" element={<ProductCreate />} />
            </Routes>
            {/* <div id="productAdd" className='innerCon'>
                <span><Link to="/product/create">상품등록</Link></span>
            </div> */}
        </div>
    );
}

export default index;