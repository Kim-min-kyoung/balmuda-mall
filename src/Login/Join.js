import React from 'react';
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config/constants';
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';
import './join.scss';
function Join() {
  //우편번호 관리하기
  const onAddData = (data) => {
    console.log(data);
    setFormData({
      ...formData,
      addr:data.address
    });
  }
  
  // 팝업창 상태 관리
  const [isPopupOpen, setIsPopupOpen] = useState(false)
	
  // 팝업창 열기
  const openPostCode = () => {
    setIsPopupOpen(true)
  }
	
  // 팝업창 닫기
  const closePostCode = () => {
    setIsPopupOpen(false)
  }
  const navigate = useNavigate();
  const [ formData, setFormData ] = useState({
    userName:"",
    phone:"",
    birthday:"",
    addr:"",
    addrdetail:"",
    userId: "",
    password: "",
    passwordCk: ""
  })
  const onChange = (e) => {
    const { name,  value } = e.target;
      setFormData({
      ...formData,
      [name]:value
      })
    console.log(name, value);
  }
  //폼 submit이벤트
  const onSubmit = (e) => {
    e.preventDefault();
    //전화번호가 숫자인지 체크하기 
    if(isNaN(formData.phone)){
    alert("전화번호는 숫자만 입력해주세요");
    setFormData({
      ...formData,
      phone:""
    });
    return null;
    }
    if(formData.name !== "" && formData.phone !== "" && 
    formData.birthday !== "" && formData.addr !== ""){
      insertCustomer();
    }   
    // setFormData({
    //   userName:"",
    //   phone:"",
    //   birthday:"",
    //   addr:"",
    //   addrdetail:"",
    //   userId: "",
    //   password: ""
    // })
  }
  const onReset = () => {
    setFormData({
      userName:"",
      phone:"",
      birthday:"",
      addr:"",
      addrdetail:"",
      userId: "",
      password: ""
    })
  }
  //post전송 axios
  function insertCustomer(){
    axios.post(`${API_URL}/join`,formData)
    .then(function(res){
      console.log(res);
      navigate(-1);
    })
    .catch(function(err){
      console.log(err);
    })
  }  
  return (
      <div id='join'>
        <div id="JoinTop">
            <div id="joinText">
                <h1>신규 고객 등록하기</h1>
            </div>
        </div>
        <form onSubmit={onSubmit}>
          <Table className='innerCon' id="join_table">
            <TableBody>
              <TableRow>
                <TableCell className="tdTitle">
                  이름
                </TableCell>
                <TableCell>
                  <input name="name" type="text" value={formData.userName} onChange={onChange} required />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="tdTitle">
                  아이디
                </TableCell>
                <TableCell>
                  <input name="id" type="text" value={formData.userId} onChange={onChange} required />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="tdTitle">
                  비밀번호
                </TableCell>
                <TableCell>
                  <input name="password" type="text" value={formData.password} onChange={onChange} required />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="tdTitle">
                  비밀번호 확인
                </TableCell>
                <TableCell>
                  <input name="passwordCk" type="text" value={formData.passwordCk} onChange={onChange} required />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="tdTitle">
                  연락처
                </TableCell>
                <TableCell>
                  <input name="phone" value={formData.phone} type="text" onChange={onChange} required />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="tdTitle">
                  생년월일
                </TableCell>
                <TableCell>
                  <input name="birthday" type="date" value={formData.birthday} onChange={onChange} required />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="tdTitle">
                  주소
                </TableCell>
                <TableCell>
                  <input name="addr" type="text" value={formData.addr} onChange={onChange} required />
                  <input name="addrdetail" type="text" value={formData.addrdetail} onChange={onChange} required placeholder='상세주소를 입력하세요'/>
                  <button type='button' onClick={openPostCode}>우편번호 검색</button>
                  <div id='popupDom'>
                    {isPopupOpen && (
                        <PopupDom>
                          <PopupPostCode onClose={closePostCode} onAddData={onAddData}  />
                        </PopupDom>
                    )}
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2} id="btn">
                  <button type="submit">등록</button>
                  <button type="reset" onClick={onReset}>취소</button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </form>
      </div>
    );
}

export default Join;