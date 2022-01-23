import axios from 'axios';
import './detailProduct.scss';
import { API_URL } from '../config/constants';
import { Link, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductView from './ProductView';

function ProductDetail(props) {
    const [ product, setProduct ] = useState(null);
    const param = useParams();
    const { id } = param;
    useEffect(() => {
        axios.get(
            `${API_URL}/products/${id}`
        )
        .then(function(result){
            setProduct(result.data.product);
            console.log(result.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }, []);
    return (
        <div classname="contents">
            <ProductView />
            <div className='innerCon'>
            <img src={product.product_description} alt="상품상세" />
            </div>
        </div>
    );
}

export default ProductDetail;