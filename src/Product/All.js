import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_URL } from '../config/constants';

function All(props) {
    const [ products, setProducts ] = useState([]);
    useEffect(() => {
        axios.get(`${API_URL}/product`)
        .then(function(result){
            const products = result.data.product;
            console.log(products);
            setProducts(products);
        })
        .catch(function(error){
            console.log(error);
        })
    }, [])
    return (
        <div className='innerCon'>
            <div id="products">
                <div id="products-list">
                        {
                            products.map(product => {
                                return(
                                    <div className="products-card" key={product.id}>
                                        <Link to={`/products/${product.id}`}>
                                            <div>
                                                <img className="product-img" src={product.imageUrl} alt="베스트셀러1" />
                                            </div>
                                            <div className="products-contents">
                                                <p>{product.name}</p>
                                                <p>{product.price}원</p>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })
                        }
                </div>
            </div>
            <div id="productAdd" className='innerCon'>
                <span><Link to="/product/create">상품등록</Link></span>
            </div>
        </div>
    );
}

export default All;