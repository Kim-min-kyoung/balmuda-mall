import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

function Review({review}) {
    return (
       <TableRow>
            <TableCell>{review.c_no}</TableCell>
            <TableCell>{review.c_title}</TableCell>
            <TableCell>{review.c_name}</TableCell>
            <TableCell>{review.c_date}</TableCell>
        </TableRow>
    );
}

export default Review;