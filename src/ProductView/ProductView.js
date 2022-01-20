import axios from 'axios';
import './product.scss';
import { API_URL } from '../config/constants';
import { Link, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewList from '../ProductReview/ReviewList';
// import { useDispatch, useSelector } from 'react-redux';
// import styled, { css } from 'styled-components';
// import { addCart } from '../store/actions';

function ProductView(props) {
    // 상품정보, 리뷰페이지 탭메뉴로 변경하기 - 서브라우터

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
                    {/* 금액 000,000 으로 변환하기 */}
                    <div id="name">{product.name}</div>
                    <div id="price">{product.price}원</div>
                    <div id="desc">{product.description}</div>
                    <div className="btn">
                        <button>ADD TO BAG</button>
                        <button>BUY IT NOW</button>
                    </div>
                </div>
            </div>
            <div id="detail">
                <ul>
                    <li><Link to="./detail">상품정보</Link></li>
                    <li><Link to="./review">상품리뷰</Link></li>
                </ul>
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