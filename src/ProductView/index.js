import React from 'react';
import ProductView from './ProductView';
import ReviewList from '../ProductReview/ReviewList';
// import ProductDetail from './ProductDetail';
import { Route, Switch, Link, Routes } from 'react-router-dom';

function index(props) {
    return (
        <div>
            <ProductView />
            <div id="detail" className='innerCon'>
                <ul>
                    <li><Link to="./">상품정보</Link></li>
                    <li><Link to="../review">상품리뷰</Link></li>
                </ul>
            </div>
            <Routes>
                <Route path="/products/:id/review" element={<ReviewList />} />
            </Routes>
        </div>
    );
}

export default index;