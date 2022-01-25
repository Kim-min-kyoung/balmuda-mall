import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_URL } from '../config/constants';

function All(props) {
    const [ products, setProducts ] = useState([]);
    const [ group, setGroup ] = useState('product');
    const AllClick = () => {
        setGroup('product');
    }
    const liClick = (e) => {
        console.log(e.target.innerHTML); 
        setGroup(`products_group/${e.target.innerHTML}`);
    }
    useEffect(() => {
        axios.get(`${API_URL}/${group}`)
        .then(function(result){
            const products = result.data.product;
            console.log(products);
            setProducts(products);
        })
        .catch(function(error){
            console.log(error);
        })
    }, [group])
    return (
        <div className='innerCon'>
            <ul className='nav'>
                <li onClick={AllClick}>ALL</li>
                <li onClick={liClick}>AIR</li>
                <li onClick={liClick}>KITCHEN</li>
                <li onClick={liClick}>LIGHTING</li>
            </ul>
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
                                                <p>{product.price.toLocaleString()}원</p>
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