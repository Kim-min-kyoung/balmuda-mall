import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableHead, TableCell, TableRow } from '@material-ui/core';
import './notice.scss';
import axios from 'axios';
import { API_URL } from '../config/constants';
import { Link } from 'react-router-dom';

// 비동기 전송으로 get요청을 해주는 함수
// 응답받은 데이터를 return해줌
// async function getNotices() {
//     const response = await axios.get(
//         'http://localhost:8080/notices'
//     )
//     return response.data;
// }

function Noticelist() {
    // const state = useAsync(getNotices);
    // const { loading, error, data: notices } = state;
    // console.log(notices);
    // // 로딩중이라면?
    // if(loading) return <div>로딩중...</div>
    // // 에러가 발생했다면?
    // if(error) return <div>페이지를 나타낼 수 없습니다.</div>
    // // 데이터가 없다면?
    // if(!notices) return null;
    // // 정상적으로 작동이 된다면?

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
                    {/* 받아온 값이 객체라 배열에 넣어주기 위해 .을 붙여 사용함 */}
                    {/* mysql 입력 후에는 배열로 받는 형태 제거! */}
                    {/* {notices.about.map(data=>(
                        <Notice data={data} key={data.id} />
                    ))} */}
                    {
                        notices.map(notice => {
                            return(
                                <TableRow key={notice.id}>
                                    <TableCell>{notice.id}</TableCell>
                                    <TableCell><Link to={`/notice/${notice.id}`}>{notice.title}</Link></TableCell>
                                    <TableCell>{notice.name}</TableCell>
                                    <TableCell>{notice.createdAt}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
            <div className="innerCon" id="noticeWrite">
                <Link to="/notice/create"><span>글쓰기</span></Link>
            </div>
            <div className="notice_pagenav">
                <a className="thispage">1</a> · <a href="v2_list.php?id=noticebd&amp;page=2" className="navi">2</a> · <a href="v2_list.php?id=noticebd&amp;page=3" className="navi">3</a> · <a href="v2_list.php?id=noticebd&amp;page=4" className="navi">4</a> 
            </div>
        </div>
    );
}

export default Noticelist;