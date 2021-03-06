import React from 'react';
import { useSelector } from 'react-redux'
import CartItem from './ProductItem';
import '../Store/store.scss';
import { BsCartCheck, BsCartX, BsCreditCard, BsCheck2Square } from 'react-icons/bs';
import { Table, TableBody, TableHead, TableCell, TableRow } from '@material-ui/core';
import { Link } from 'react-router-dom';

function ProductList({ isChecked }) {
    const cart = useSelector(store => store.cartReducer);
    console.log(cart);
    let sum = 0;
    const cartItem = cart.carts.length >= 1 ? cart.carts.map((product, idx) => {
        sum = cart.total;
        return <CartItem key={idx} product={product} idx={idx} />
    }) 
    : <TableRow className='cart-empty'>
        <TableCell colSpan={5}>
            <BsCartX id="icon"/><br/>상품이 존재하지 않습니다.
        </TableCell>
    </TableRow>
    return (
        <div className="innerCon" id="store">
            <div id="header">
                <ul>
                    <li><span className="active"><BsCartCheck id="icons" /></span>장바구니</li>
                    <span className='line'/>
                    <li><span><BsCreditCard id="icons" /></span>주문/결제</li>
                    <span className='line'/>
                    <li><span><BsCheck2Square id="icons" /></span>주문완료</li>
                </ul>
            </div>
            <div id="main">
                <div id="top">
                    <Table id="storeTable">
                        <TableHead>
                            <TableRow>
                                <TableCell id="img_cell"></TableCell>
                                <TableCell id="name_cell">제품명</TableCell>
                                <TableCell id="count_cell">수량</TableCell>
                                <TableCell id="price_cell">제품금액</TableCell>
                                <TableCell id="delete_cell"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cartItem}
                        </TableBody>
                    </Table>
                </div>
                <div id="footer">
                    <div id="footer_price">
                        <p>총 결제금액</p>
                        <p id="total_price">{sum.toLocaleString()}원</p>
                    </div>
                    <div id="footer_btn">
                        <span>결제하기</span>
                        <span><Link to="../product">상품 더보기</Link></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;