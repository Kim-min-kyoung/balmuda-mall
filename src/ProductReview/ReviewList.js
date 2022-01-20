import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableHead, TableCell, TableRow } from '@material-ui/core';
import Review from './Review';

function ReviewList(props) {
    return (
        <div>
            <div id="top">
                <h2>Review</h2>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>번호</TableCell>
                            <TableCell align='center'>내용</TableCell>
                            <TableCell align='center'>아이디</TableCell>
                            <TableCell align='center'>작성일</TableCell>
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