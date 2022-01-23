import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { API_URL } from '../config/constants';

function Kitchen(props) {
    const [ product, setProduct ] = useState(null);
    const param = useParams();
    console.log(param);
    const { group } = param;
    useEffect(() => {
        axios.get(
            `${API_URL}/products/${group}`
        )
        .then(function(result){
            const product = result.data.product;
            console.log(product);
            setProduct(product);
        })
        .catch(function(error){
            console.log(error);
        })
    }, [])
    if(product == null) {
        return <div>상품리스트 받는 중 ing...</div>
    }
    return (
        <div className='innerCon'>
            <div id="products">
                <div className="product-card">
                    <Link to={`/product/${product.id}`}>
                        <div>
                            <img className="product-img" src={product.imageUrl} alt="베스트셀러1" />
                        </div>
                        <div className="product-contents">
                            <span>{product.name}</span>
                            <span>{product.subname}</span>
                            <span id="detailGo">제품 보러가기</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Kitchen;