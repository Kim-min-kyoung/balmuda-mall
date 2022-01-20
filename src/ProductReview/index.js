import React from 'react';
import ReviewList from './ReviewList';
import ProductView from '../ProductView/ProductView';
import { Route, Routes, Link } from 'react-router-dom';

function index(props) {
    return (
        <div className='contents'>
            <ProductView />
            <div className='innerCon' id="detail">
                <ul>
                    <li>상품정보</li>
                    <li>상품리뷰</li>
                </ul>
            </div>
        </div>
    );
}

export default index;