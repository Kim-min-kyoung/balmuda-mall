import axios from 'axios';
import './product.scss';
import { API_URL } from '../config/constants';
// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';

function ProductView({ onChange, onCreatelist, desc }) {
    const [ product, setProduct ] = useState(null);
    const [ open, setOpen] = useState(false);
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
    function onToggle(){
        setOpen(!open);
    }
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
                    <div id="price">{product.price}원</div>
                    <div id="desc">{product.description}</div>
                    <div className="btn">
                        <span>ADD TO BAG</span>
                        <span>BUY IT NOW</span>
                    </div>
                </div>
            </div>
            <div id="detail">
                <h2>상품정보</h2>
                <div>
                    <img src={product.product_description} alt="상품상세" />
                </div>
            </div>
            <div id="review">
                <div id="top">
                    <h2>Review</h2>
                    <div>
                        {open &&
                            <form>
                                <div class="rating">
                                <p>Rating</p>
                                    <div>
                                        <faStar/>
                                        <faStar/>
                                        <faStar/>
                                        <faStar/>
                                        <faStar/>
                                    </div>
                                </div>
                            </form>
                        }
                    </div>
                    <span id="reviewGo" onClick={onToggle} onpen={open}>작성하기</span>
                </div>
            </div>
        </div>
    );
}

export default ProductView;