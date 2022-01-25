import React from 'react';
import { Table, TableHead, TableCell, TableRow } from '@material-ui/core';


function supportList(props) {
    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>NO.</TableCell>
                        <TableCell>제목</TableCell>
                        <TableCell>날짜</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </div>
    );
}

export default supportList;