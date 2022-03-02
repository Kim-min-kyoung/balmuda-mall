import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableHead, TableCell, TableRow } from '@material-ui/core';
import './notice.scss';
import axios from 'axios';
import { API_URL } from '../config/constants';
import { Link } from 'react-router-dom';

function Noticelist() {
    const [ notices, setNotices ] = useState([]);
    useEffect(() => {
        axios.get(`${API_URL}/notice`)
        .then(function(result){
            const notices = result.data.notice;
            console.log(notices);
            setNotices(notices);
        })
        .catch(function(error){
            console.log(error);
        })
    }, [])
    return (
        <div>
            <Table className='innerCon' id="noitceTable">
                <TableHead>
                    <TableRow>
                        <TableCell>NO.</TableCell>
                        <TableCell>제목</TableCell>
                        <TableCell>작성자</TableCell>
                        <TableCell>날짜</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        notices.map(notice => {
                            return(
                                <TableRow key={notice.id}>
                                    <TableCell>{notice.id}</TableCell>
                                    <TableCell><Link to={`/notice/${notice.id}`}>{notice.title}</Link></TableCell>
                                    <TableCell>{notice.name}</TableCell>
                                    <TableCell>{notice.createdAt.substring(0, 10)}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
            <div className="innerCon" id="noticeWrite">
                <Link to="/notice/create"><span>글쓰기</span></Link>
            </div>
        </div>
    );
}

export default Noticelist;