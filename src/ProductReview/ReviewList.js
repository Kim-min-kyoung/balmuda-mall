import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableHead, TableCell, TableRow } from '@material-ui/core';


function ReviewList(props) {
    return (
        <div>
            <div id="top">
                <h2>Review</h2>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>번호</TableCell>
                            <TableCell></TableCell>
                            <TableCell>이름</TableCell>
                            <TableCell>작성일</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        
                    </TableBody>
                </Table>
                <span id="reviewGo">작성하기</span>
            </div>
        </div>
    );
}

export default ReviewList;