import React from 'react';
import { useSelector } from 'react-redux'
import CartItem from './ProductItem';
import '../Store/store.scss';
import { BsCartCheck, BsCreditCard, BsCheck2Square } from 'react-icons/bs';

function ProductList(props) {
    const cart = useSelector(store => store.cartReducer);
    const cartItem = cart.length >= 1 ? cart.map((product, idx) => {
        return <CartItem key={idx} product={product} idx={idx} />
    }) : <div className='cart-empty'>장바구니가 비어 있습니다.</div>
    return (
        <div className="innerCon" id="store">
            <div id="header">
                <ul>
                    <li><span className="active"><BsCartCheck id="icons" /></span>장바구니</li>
                    <li><span><BsCreditCard id="icons" /></span>주문/결제</li>
                    <li><span><BsCheck2Square id="icons" /></span>주문완료</li>
                </ul>
            </div>
            <div id="main">
                <div id="top">
                    <ul id="storeTable">
                        <li id="check">전체선택</li>
                        <li>이미지</li>
                        <li>제품명</li>
                        <li>수량</li>
                        <li>제품금액</li>
                    </ul>
                    {cartItem}
                </div>
            </div>
        </div>
    );
}

export default ProductList;