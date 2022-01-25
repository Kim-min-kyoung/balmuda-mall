import React from 'react';
import './store.scss';
import { BsCartCheck, BsCreditCard, BsCheck2Square } from 'react-icons/bs';

function index() {
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
                    <table id="storeTable">
                        <th id="check">전체선택</th>
                        <th>제품정보</th>
                        <th>수량</th>
                        <th>제품금액</th>
                        <th>선택</th>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default index;