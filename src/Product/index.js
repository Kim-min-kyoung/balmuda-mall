import React from 'react';
import Header from './Header';
import All from './All';
import { Routes, Route } from 'react-router-dom';
import ProductCreate from './ProductCreate';

function index(props) {
    return (
        <div id="productBoard">
            <Header />
            <Routes>
                <Route path="/" element={<All />} />
                <Route path="/create" element={<ProductCreate />} />
            </Routes>
        </div>
    );
}

export default index;