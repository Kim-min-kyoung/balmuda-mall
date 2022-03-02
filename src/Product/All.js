import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_URL } from '../config/constants';
import WithSkeleton from '../Loading/WithSkeleton';

function All(props) {
    const [ products, setProducts ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ group, setGroup ] = useState('product');
    const AllClick = () => {
        setGroup('product');
    }
    const liClick = (e) => {
        console.log(e.target.innerHTML); 
        setGroup(`products_group/${e.target.innerHTML}`);
    }
    useEffect(() => {
        setIsLoading(true);
        new Promise(result => {
            setTimeout(()=> {
                result();
            }, 500);
        }).then(() => {
            axios.get(`${API_URL}/${group}`)
            .then(result => {
                setProducts(result.data.product);
                setTimeout(() => setIsLoading(false), 500);
            })
        })
    }, [group]);
    return (
        <div className='innerCon'>
            <ul className='nav'>
                <li onClick={AllClick}>ALL</li>
                <li onClick={liClick}>AIR</li>
                <li onClick={liClick}>KITCHEN</li>
                <li onClick={liClick}>LIGHTING</li>
            </ul>
            <div id="products">
                <WithSkeleton isLoading={isLoading} data={products} />
            </div>
            <div id="productAdd" className='innerCon'>
                <span><Link to="/product/create">상품등록</Link></span>
            </div>
        </div>
    );
}

export default All;