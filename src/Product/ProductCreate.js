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
    const onSubmit = (values)=>{
        console.log(formData);
        axios.post(`${API_URL}/products`,{
            name: formData.name,
            subname: formData.subname,
            group: formData.group,
            description: formData.description,
            product_description: `${API_URL}/upload/detail/${formData.product_description}`,
            price: parseInt(formData.price),
            imageUrl: `${API_URL}/upload/product/${formData.imageUrl}`
        }).then((result)=>{
            console.log(result);
        })
        .catch((error)=>{
            console.error(error);
        })
    }
     // 이미지 처리함수
     const onChangeImage = (e) => {
        console.log(e);
        const { name } = e.target;
        // 파일이 업로드 완료 되었을 떄
        if(e.target.files){
            const file = e.target.files;
            const formdata = new FormData();
            formdata.append('image',file[0]);
            console.log(file);
            const config = {
                Headers: {
                    'content-type':'multipart/form-data',
                },
            };
            if(name === "imageUrl"){
                axios.post(`${API_URL}/upload_product`, formdata, config).then((result)=>{
                    console.log(result.data.imageUrl); 
                    setFormData({
                        ...formData,
                        imageUrl:result.data.imageUrl
                    })
                })
                .catch((error)=>{
                    console.error(error);
                });
            }else {
                axios.post(`${API_URL}/upload_detail`, formdata, config).then((result)=>{
                    console.log(result.data.imageUrl); 
                    setFormData({
                        ...formData,
                        product_description:result.data.imageUrl
                    })
                })
                .catch((error)=>{
                    console.error(error);
                });
            }     
        }
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <Table className='innerCon' id="productTable">
                    <TableBody>
                        <TableRow id="noticeDesc">
                            <TableCell className="tdTitle">상품 그룹</TableCell>
                            <TableCell>
                                AIR <input name="group" type="radio" value="AIR" onChange={onChange} />
                                KITCHEN <input name="group" type="radio" value="KITCHEN" onChange={onChange} />
                                LIGHTING <input name="group" type="radio" value="LIGHTING" onChange={onChange} />
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
                            <TableCell><input name="product_description" type="file" onChange={onChangeImage} /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="tdTitle">이미지</TableCell>
                            <TableCell>
                                <input name="imageUrl" type="file" onChange={onChangeImage}  />   
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <div id="productBtn" className="innerCon">
                    <button type="submit">등록</button>
                    <button onClick={(e) => (e.preventDefault())}><Link to="/product">취소</Link></button>
                </div>
            </form>
        </div>
    );
}

export default ProductCreate;