import React, { useEffect, useState } from 'react';
import './notice.scss';
import { API_URL } from '../config/constants';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Tab, Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import axios from 'axios';

function NoticeView() {
    const [ notice, setNotice ] = useState(null);
    const param = useParams();
    const { id } = param;
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(
            `${API_URL}/notice/${id}`
        )
        .then(function(result){
            setNotice(result.data.notice);
            console.log(result.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }, []);

    // 삭제
    const onDelete = () => {
        axios.delete(
            `${API_URL}/notice/${id}`
        )
        .then(function(result){
            console.log("삭제되었습니다.");
            navigate(-1);
        })
        .catch(function(error){
            console.log(error);
        })
    }
    if(notice == null) {
        return <div>공지게시판 받아오는 중 ing..</div>
    }
    return (
        <div>
            <Table className='innerCon' id="noitceTable2">
                <TableBody>
                    <TableRow>
                        <TableCell className="tdTitle">제목</TableCell>
                        <TableCell>{notice.title}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="tdTitle">날짜</TableCell>
                        <TableCell>{notice.createdAt}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="tdTitle">작성자</TableCell>
                        <TableCell>{notice.name}</TableCell>
                    </TableRow>
                    <TableRow id="noticeDesc">
                        <TableCell className="tdTitle">내용</TableCell>
                        <TableCell>{notice.desc}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <div id="noticeBtn" className="innerCon">
                <button onClick={onDelete}>삭제</button>
                <Link to={`/notice/${id}/edit`}><button>수정</button></Link>
                <button onClick={(e) => (e.preventDefault())}><Link to="/notice">리스트</Link></button>
            </div>
        </div>
    );
}

export default NoticeView;