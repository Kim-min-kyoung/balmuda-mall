import React, { useEffect, useState } from 'react';
import './notice.scss';
import { API_URL } from '../config/constants';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import axios from 'axios';

function NoticeCreate() {
    const navigate = useNavigate();
    const [ formData, setFormData ] = useState({
        name: "",
        title: "",
        desc: ""
    })
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
        console.log(name,value);
    }
    // 폼 submit 이벤트
    const onSubmit = (e) => {
        e.preventDefault();
        addNotice();
        setFormData({
            name: "",
            title: "",
            desc: ""
        })
    }
    // post전송 axios
    function addNotice(){
        axios.post(
            `${API_URL}/notice`, formData
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
                            <TableCell><input name="title" type="text" value={formData.title} onChange={onChange} /></TableCell>
                        </TableRow>
                        {/* <TableRow>
                            <TableCell className="tdTitle">날짜</TableCell>
                            <TableCell><input name="createAt" type="text" value={formData.createdAt} onChange={onChange} /></TableCell>
                        </TableRow> */}
                        <TableRow>
                            <TableCell className="tdTitle">작성자</TableCell>
                            <TableCell><input name="name" type="text" value={formData.name} onChange={onChange} /></TableCell>
                        </TableRow>
                        <TableRow id="noticeDesc">
                            <TableCell className="tdTitle">내용</TableCell>
                            <TableCell><input name="desc" id="desc" type="text" value={formData.desc} onChange={onChange} /></TableCell>
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

export default NoticeCreate;