import React from 'react';
import ProductView from './ProductView';
import ReviewList from '../ProductReview';
import Nav from './Nav';
// import ProductDetail from './ProductDetail';
import { Route, Link, Routes } from 'react-router-dom';

function index(props) {
    return (
        <div>
            <ProductView />
            {/* <Nav /> */}
            <Routes>
                <Route path="/review" element={<ReviewList />} />
            </Routes>
        </div>
    );
}

export default index;