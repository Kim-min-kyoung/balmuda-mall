import React from 'react';
import './support.scss';
import supportList from './supportList';
import { Routes, Route, Link } from 'react-router-dom';
import { Table, TableHead, TableCell, TableRow } from '@material-ui/core';

function index(props) {
    return (
        <div className='innerCon' id="support">
            <h1><span>Notice</span>공지사항</h1>
            <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align='center' width={80}>NO.</TableCell>
                        <TableCell align='center' width={500}>제목</TableCell>
                        <TableCell align='center' width={200}>날짜</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
            </div>
        </div>
    );
}

export default index;