import React, { useState } from 'react';
import './product.scss';
import { Link, useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import axios from 'axios';
import { API_URL } from '../config/constants';

function ProductCreate(props) {
    const navigate = useNavigate();
    // input값 state로 관리
    const [ formData, setFormData ] = useState({
        name: "",
        subname: "",
        group: "",
        description: "",
        product_description: "",
        price: "",
        imageUrl: ""
    })
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
        console.log(name,value);
    }
    // 이미지 경로 상태관리 추가하기
    const [ imageUrl, setImageUrl ] = useState(null);
    const onSubmit = (values)=>{
        axios.post(`${API_URL}/products`,{
            name: values.name,
            subname: formData.subname,
            group: formData.group,
            description: formData.description,
            product_description: formData.product_description,
            price: parseInt(formData.price),
            imageUrl: `${API_URL}/`+imageUrl
        }).then((result)=>{
            console.log(result);
            navigate(-1);   
        })
        .catch((error)=>{
            console.error(error);
        })
    }
    // 이미지 처리함수
    const onChangeImage = (info) => {
        // 파일이 업로드 중일 때
        if(info.file.status === 'uploading'){
            return;
        }
        // 파일이 업로드 완료 되었을 떄
        if(info.file.status === 'done'){
            const response = info.file.response;
            const imageUrl = response.imageUrl;
            setImageUrl(imageUrl);
        }
    }
    // // 폼 submit 이벤트
    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     setFormData({
    //         name: "",
    //         title: "",
    //         desc: ""
    //     })
    // }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <Table className='innerCon' id="productTable">
                    <TableBody>
                        <TableRow id="noticeDesc">
                            <TableCell className="tdTitle">상품 그룹</TableCell>
                            <TableCell>
                                AIR <input name="group" type="radio" value="air" onChange={onChange} />
                                KITCHEN <input name="group" type="radio" value="kitchen" onChange={onChange} />
                                LIGHTING <input name="group" type="radio" value="lighting" onChange={onChange} />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="tdTitle">상품명</TableCell>
                            <TableCell><input name="name" type="text" value={formData.name} onChange={onChange} /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="tdTitle">상품 서브명</TableCell>
                            <TableCell><input name="subname" type="text" value={formData.subname} onChange={onChange} /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="tdTitle">상품 금액</TableCell>
                            <TableCell><input name="price" type="text" value={formData.price} onChange={onChange} /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="tdTitle">상품 설명</TableCell>
                            <TableCell><input name="description" id="desc" type="text" value={formData.description} onChange={onChange} /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="tdTitle">상품 정보</TableCell>
                            <TableCell><input name="product_description" type="file" accept='image/*' value={formData.product_description} onChange={onChange} /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="tdTitle">이미지</TableCell>
                            <TableCell>
                                <input name="imageUrl" id="text" type="file" action={`${API_URL}/image`}
                                onChange={onChangeImage} value={formData.imageUrl} />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <div id="productBtn" className="innerCon">
                    <button type="submit">등록</button>
                    <button onClick={(e) => (e.preventDefault())}><Link to="/notice">취소</Link></button>
                </div>
            </form>
        </div>
    );
}

export default ProductCreate;