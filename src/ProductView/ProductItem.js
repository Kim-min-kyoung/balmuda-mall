import React from 'react';

function ProductItem(props) {
    return (
        <div>
            <ul id="storeTable">
                <li id="check">체크</li>
                <li><img src='img/products/GreenFan.jpg'/></li>
                <li>공기청정기</li>
                <li>1</li>
                <li>249000</li>
            </ul>
        </div>
    );
}

export default ProductItem;