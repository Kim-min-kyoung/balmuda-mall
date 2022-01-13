import './main.scss';
import axios from 'axios';
import { API_URL } from '../config/constants';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiFillNotification } from 'react-icons/ai';
import { GoChevronRight } from 'react-icons/go';

function MainPage() {
    const [ products, setProducts ] = useState([]);
    useEffect(() => {
        axios.get(`${API_URL}/products`)
        .then(function(result){
            const products = result.data.product;
            console.log(products);
            setProducts(products);
        })
        .catch(function(error){
            console.log(error);
        })
    }, [])
    return (
        <div id="main">
            <div id="visual">
                <img src="img/main01.jpg" alt="메인페이지 이미지01" />
                <div id="visual_text">
                    <img src="img/main01_text.svg" alt="메인페이지 이미지01 텍스트" />
                    <a>제품정보</a>
                </div>
                {/* <div id="indi">
                    <ul>
                        <li/>
                        <li/>
                        <li/>
                        <li/>
                        <li/>
                    </ul>
                </div> */}
            </div>
                <div id="product" className="innerCon">
                    <p>Best <strong>Seller</strong></p>
                    <ul id="productTop">
                        <li>CLEANSER</li>
                        <li>KITCHEN</li>
                        <li>AIR</li>
                        <li>LIGHTING</li>
                    </ul>
                    <div id="product-list">
                        {
                            products.map(product => {
                                return(
                                    <div className="product-card" key={product.id}>
                                        <Link to={`/products/${product.id}`}>
                                            <div>
                                                <img className="product-img" src={product.imageUrl} alt="베스트셀러1" />
                                            </div>
                                            <div className="product-contents">
                                                <span>{product.name}</span>
                                                <span>{product.subname}</span>
                                                <span id="detailGo">제품 보러가기 <GoChevronRight id="icons"/></span>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })
                        }
                        {/* <div className="product-card">
                            <div>
                                <img className="product-img" src="img/products/BALMUDA The Range (Black).jpeg" alt="토스트기1" />
                            </div>
                            <div className="product-contents">
                                <span>BALMUDA The Range (Black)</span>
                                <span>전자레인지와 오븐이 하나로</span>
                                <span id="detailGo">제품 보러가기 <GoChevronRight id="icons"/></span>
                            </div>
                        </div>
                        <div className="product-card">
                            <div>
                                <img className="product-img" src="img/products/BALMUDA The Range (Stainless).jpeg" alt="토스트기1" />
                            </div>
                            <div className="product-contents">
                                <span>BALMUDA The Range (Stainless)</span>
                                <span>전자레인지와 오븐이 하나로</span>
                                <span id="detailGo">제품 보러가기 <GoChevronRight id="icons"/></span>
                            </div>
                        </div>
                        <div className="product-card">
                            <div>
                                <img className="product-img" src="img/products/BALMUDA The Range (White).jpeg" alt="토스트기1" />
                            </div>
                            <div className="product-contents">
                                <span>BALMUDA The Range (White)</span>
                                <span>전자레인지와 오븐이 하나로</span>
                                <span id="detailGo">제품 보러가기 <GoChevronRight id="icons"/></span>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div id="container">
                    <div id="recipe" className="innerCon">
                        <div id="recipe-list">
                            <div className="recipe-card">
                                <ul id="title">
                                    <li>BALMUDA The Toaster</li>
                                    <li>
                                        특별함을 아는<br/>
                                        <strong>사람들의 레시피</strong>
                                    </li>
                                    <li>SIGNATURE RECIPE</li>
                                </ul>
                                <span id="recipeGo">더 알아보기</span>
                            </div>
                            <div className="recipe-card">
                                <div>
                                    <img className="recipe-img" src="img/recipe/recipe01.jpeg" alt="레시피1" />
                                </div>
                                <div className="recipe-contents">
                                    <span>리치베리 모닝 에그번</span>
                                    <span id="dec">
                                        전문가의 노하우로 만든 프리미엄 서브푸드 브랜드<br/>
                                        쎄콩데 「콩포트」를 활용한 특별 레시피를 소개합니다.
                                    </span>
                                </div>
                            </div>
                            <div className="recipe-card">
                                <div>
                                    <img className="recipe-img" src="img/recipe/recipe02.jpeg" alt="레시피2" />
                                </div>
                                <div className="recipe-contents">
                                    <span>카레 리소토</span>
                                    <span id="dec">
                                        카레를 잔뜩 만들어 남은 날에는,<br/>
                                        다음날 카레 리소토를 만들어 드시는 것을 추천합니다.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="notice">
                    <div>
                        <span id="title">중요안내</span>
                        <p><AiFillNotification id="icons"/> BALMUDA The Toaster 제조번호(S/N)가 KBk919MH , KBm919MH 로 시작하는 제품을 사용하고 계신 고객님께 전하는 중요 안내사항</p>
                    </div>
                </div>
            </div>
    );
}

export default MainPage;