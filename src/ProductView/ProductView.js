import axios from 'axios';
import './detailProduct.scss';
import { API_URL } from '../config/constants';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
// import ReviewList from '../ProductReview/ReviewList';
import { useDispatch } from "react-redux";
import { addCart } from '../Store/action'
// import styled, { css } from 'styled-components';

function ProductView() {
    // 장바구니
    const dispatch = useDispatch();

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
    if(product == null) {
        return <div>상품정보 받는 중 ing..</div>
    }
    return(
        <div className="innerCon">
            <div id="detail_main">
                <div id="image-box">
                    <img src={product.imageUrl} alt="제품" />
                </div>
                <div id="contents-box">
                    <div id="subname">{product.subname}</div>
                    <div id="name">{product.name}</div>
                    <div id="price">{product.price.toLocaleString()}원</div>
                    <div id="desc">{product.description}</div>
                    <div className="btn">
                        <button onClick={() => dispatch(addCart(product))} className='add-cart-btn'>ADD TO BAG</button>
                        <button>BUY IT NOW</button>
                    </div>
                </div>
            </div>
            <div id="detail">
                <div>
                    {/* 컴포넌트로 빼고 라우트로 관리하기  */}
                    <img src={product.product_description} alt="상품상세" />
                    {/* <Route path="/review" element={ReviewList} /> */}
                </div>
            </div> 
        </div>
    );
}

export default ProductView;