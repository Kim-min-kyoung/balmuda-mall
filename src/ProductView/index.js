import React from 'react';
import ProductView from './ProductView';
import ReviewList from '../ProductReview';
import { Route, Routes } from 'react-router-dom';

function index(props) {
    return (
        <div>
            <ProductView />
            <Routes>
                <Route path="/review" element={<ReviewList />} />
            </Routes>
        </div>
    );
}

export default index;