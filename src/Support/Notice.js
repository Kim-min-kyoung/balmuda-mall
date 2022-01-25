import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Notice({data}) {
    return (
        <TableRow>
            <TableCell>{data.c_no}</TableCell>
            <TableCell><Link to={`/notice/${data.n_no}`}>{data.n_title}</Link></TableCell>
            <TableCell>{data.c_name}</TableCell>
            <TableCell>{data.n_data}</TableCell>
        </TableRow>
    );
}

export default Notice;