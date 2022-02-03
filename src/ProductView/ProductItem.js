import { TableRow, TableCell } from '@material-ui/core';
import { BsTrash } from 'react-icons/bs';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart, increment, decrement } from '../Store/action';

function ProductItem( { product } ) {
    const cart = useSelector(store => store.cartReducer);
    const dispatch = useDispatch();
    const deleteCartProducdt = () => {
        console.log(product);
        dispatch(deleteCart(product));
        alert("장바구니에서 삭제되었습니다.");
    };
    console.log(product);
    return (
        <TableRow>
            <TableCell id="img_cell"><img src={product.imageUrl} alt="이미지" /></TableCell>
            <TableCell id="name_cell">{product.name}</TableCell>
            <TableCell id="count_cell">
                <button onClick={() => dispatch(decrement(product))} min={1}>-</button>
                <span>{cart.quantity}</span>
                <button onClick={() => dispatch(increment(product))}>+</button>
            </TableCell>
            <TableCell id="price_cell" className="point_cell">{product.price.toLocaleString()}</TableCell>
            <TableCell id="delte_cell"><BsTrash id="icon" onClick={deleteCartProducdt}/></TableCell>
        </TableRow>
    );
}

export default ProductItem;