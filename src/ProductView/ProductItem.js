import { TableRow, TableCell } from '@material-ui/core';
import { BsTrash } from 'react-icons/bs';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCart, increment, decrement } from '../Store/action';
import Checkbox from '../Store/Checkbox';

function ProductItem( { product, isChecked } ) {
    const dispatch = useDispatch();
    const deleteCartProducdt = () => {
        console.log(product);
        dispatch(deleteCart(product));
        alert("장바구니에서 삭제되었습니다.")
    };
    console.log(product);
    return (
        <TableRow>
            <TableCell id="check"><Checkbox isChecked={false}/></TableCell>
            <TableCell id="img_cell"><img src={product.imageUrl} alt="글" /></TableCell>
            <TableCell id="name_cell">{product.name}</TableCell>
            <TableCell id="count_cell">
                <button onClick={() => dispatch(decrement(product))}>-</button>
                <input type="text"/>
                <button onClick={() => dispatch(increment(product))}>+</button>
            </TableCell>
            <TableCell id="price_cell">{product.price.toLocaleString()}</TableCell>
            <TableCell id="delte_cell"><BsTrash id="icon" onClick={deleteCartProducdt}/></TableCell>
        </TableRow>
    );
}

export default ProductItem;