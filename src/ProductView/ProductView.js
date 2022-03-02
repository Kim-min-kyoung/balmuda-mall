import axios from 'axios';
import './detailProduct.scss';
import Spinner from '../Loading/Spinner'
import { API_URL } from '../config/constants';
import { useParams, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { addCart } from '../Store/action';

function ProductView() {
    const dispatch = useDispatch();
    const [ product, setProduct ] = useState(null);
    const param = useParams();
    const { id } = param;
    const addCartProduct = () => {
        console.log(product);
        dispatch(addCart(product));
        alert("장바구니에 추가되었습니다.");
    }
    useEffect(() => {
        setTimeout(async() => {
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
        }, 1000);
    },[]);
    if(product == null) {
        return (
            <div><Spinner /></div>
        );
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
                        <button onClick={addCartProduct} className='add-cart-btn'>ADD TO CART</button>
                        <button><Link to="/product">GO BACK</Link></button>
                    </div>
                </div>
            </div>
            <div id="detail">
                <div>
                    <img src={product.product_description} alt="상품상세" />
                </div>
            </div> 
        </div>
    );
}

export default ProductView;