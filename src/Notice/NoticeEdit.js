import React, { useEffect, useState } from 'react';
import './notice.scss';
import { API_URL } from '../config/constants';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import axios from 'axios';

function NoticeEdit() {
    const [ notice, setNotice ] = useState(null);
    const [ formData, setFormData ] = useState({
        name: "",
        title: "",
        desc: ""
    })
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
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
        console.log(name, value);
    }
    // 폼 submit 이벤트
    const onSubmit = (e) => {
        e.preventDefault();
        updateNotice();
        setFormData({
            name: "",
            title: "",
            desc: ""
        })
    }
    // post전송 axios
    function updateNotice(){
        axios.post(
            `${API_URL}/notice_edit/${id}`, formData
            )
        .then(function(res){
            console.log(res);
            navigate(-1);
        })
        .catch(function(err){
            console.log(err);
        })
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <Table className='innerCon' id="noitceTable2">
                    <TableBody>
                        <TableRow>
                            <TableCell className="tdTitle">제목</TableCell>
                            <TableCell><input name="title" type="text" value={formData.title} onChange={onChange}/></TableCell>
                        </TableRow>
                        {/* <TableRow>
                            <TableCell className="tdTitle">날짜</TableCell>
                            <TableCell><input name="date" type="date" value={formData.date} onChange={onChange} /></TableCell>
                        </TableRow> */}
                        <TableRow>
                            <TableCell className="tdTitle">작성자</TableCell>
                            <TableCell><input name="name" type="text" value={formData.name} onChange={onChange}/></TableCell>
                        </TableRow>
                        <TableRow id="noticeDesc">
                            <TableCell className="tdTitle">내용</TableCell>
                            <TableCell><input name="desc" id="desc" type="text" value={formData.desc} onChange={onChange}/></TableCell>
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