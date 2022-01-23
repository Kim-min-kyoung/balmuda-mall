import React, { useEffect, useState } from 'react';
import './notice.scss';
import { API_URL } from '../config/constants';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Tab, Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import axios from 'axios';
import useAsync from '../hooks/useAsync';

function NoticeEdit() {
    // 조회
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

    // const param = useParams();
    // const navigate = useNavigate();
    // const { id } = param;
    // const [ formData, setFormData ] = useState({
    //     name: "",
    //     title: "",
    //     desc: ""
    // })
    // 폼 submit 이벤트
    const onSubmit = (e) => {
        e.preventDefault();
        updateNotice(e.target);
        // setFormData({
        //     name: "",
        //     title: "",
        //     desc: ""
        // })
        navigate(-1);
    }
    // post전송 axios
    function updateNotice(){
        axios.post(
            `http://localhost:8080/notice/${id}/edit/${id}`
            )
        .then(function(res){
            console.log(res);
            navigate(-1);
        })
        .catch(function(err){
            console.log(err);
        })
    }
    // // 저장
    // const onSubmit = () => {
    //     axios.delete(
    //         `${API_URL}/notice/${id}`
    //     )
    //     .then(function(result){
    //         console.log("삭제되었습니다.");
    //         navigate(-1);
    //     })
    //     .catch(function(error){
    //         console.log(error);
    //     })
    // }
    // if(notice == null) {
    //     return <div>공지게시판 받아오는 중 ing..</div>
    // }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <Table className='innerCon' id="noitceTable2">
                    <TableBody>
                        <TableRow>
                            <TableCell className="tdTitle">제목</TableCell>
                            <TableCell><input name="title" type="text" defaultValue={notice[0].title} /></TableCell>
                        </TableRow>
                        {/* <TableRow>
                            <TableCell className="tdTitle">날짜</TableCell>
                            <TableCell><input name="createAt" type="text" value={formData.createdAt} onChange={onChange} /></TableCell>
                        </TableRow> */}
                        <TableRow>
                            <TableCell className="tdTitle">작성자</TableCell>
                            <TableCell><input name="name" type="text"defaultValue={notice[0].name}  /></TableCell>
                        </TableRow>
                        <TableRow id="noticeDesc">
                            <TableCell className="tdTitle">내용</TableCell>
                            <TableCell><input name="desc" id="desc" type="text" defaultValue={notice[0].desc}  /></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <div id="noticeBtn" className="innerCon">
                    <button type="submit">등록</button>
                    <button onClick={(e) => (e.preventDefault())}><Link to="/notice">취소</Link></button>
                </div>
            </form>
        </div>
    );
}

export default NoticeEdit;