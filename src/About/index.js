import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {API_URL} from '../config/constants';
import './about.scss';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

function About() {
    const [ abouts, setAbouts ] = useState([]);
    useEffect(() => {
        axios.get(`${API_URL}/abouts`)
        .then(function(result){
            const abouts = result.data.about;
            console.log(abouts);
            setAbouts(abouts);
        })
        .catch(function(error){
            console.log(error);
        })
    }, [])
    return (
        <div id="about_con">
            <div id="con_inner">
                <div id="aboutTop">
                    <h1>About</h1>
                    <p><RiDoubleQuotesL />발뮤다 제품을 만들기 위한 집념<RiDoubleQuotesR /></p>
                </div>
                <div id="about" className="innerCon">
                    <div id="about-list">
                        {
                            abouts.map(about => {
                                return(
                                    <div className="about-card" key={about.id}>
                                        <div>
                                            <img className="about-img" src={about.imageUrl} alt="스토리 이미지" />
                                        </div>
                                        <div className="about-contents">
                                            <h3>{about.name}</h3>
                                            <p>{about.desc}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {/* <div className="about-card">
                            <div>
                                <img className="about-img" src="img/about/story1.jpg" alt="스토리1" />
                            </div>
                            <div class="about-contents">
                                <h3>추억의 치즈 감자칩</h3>
                                <p>추억의 맛. 어릴적 어머니가 자주 만들어 주셨던 치즈 감자칩을 소개합니다.</p>
                            </div>
                        </div>
                        <div className="about-card">
                            <div>
                                <img className="about-img" src="img/about/story2.jpg" alt="스토리2" />
                            </div>
                            <div class="about-contents">
                                <h3>맛있는 음식을 함께 나누다</h3>
                                <p>맛있다는 경험은 누군가와 나누는 것으로, 한층 더 깊어집니다.</p>
                            </div>
                        </div>
                        <div className="about-card">
                            <div>
                                <img className="about-img" src="img/about/story3.jpg" alt="스토리3" />
                            </div>
                            <div class="about-contents">
                                <h3>인생 최고의 크루아상</h3>
                                <p>BALMUDA The Toaster 크루아상 모드에 얽힌 이야기.</p>
                            </div>
                        </div>
                        <div className="about-card">
                            <div>
                                <img className="about-img" src="img/about/story4.jpg" alt="스토리4" />
                            </div>
                            <div class="about-contents">
                                <h3>치즈토스트에 대한 추억</h3>
                                <p>발뮤다만의 특별한 치즈 토스트 모드가 개발되기까지의 이야기.</p>
                            </div>
                        </div>
                        <div className="about-card">
                            <div>
                                <img className="about-img" src="img/about/story5.jpg" alt="스토리5" />
                            </div>
                            <div class="about-contents">
                                <h3>한여름의 아침식사</h3>
                                <p>BALMUDA The Toaster로 만든 든든한 아침식사를 소개합니다.</p>
                            </div>
                        </div>
                        <div className="about-card">
                            <div>
                                <img className="about-img" src="img/about/story6.jpg" alt="스토리6" />
                            </div>
                            <div class="about-contents">
                                <h3>와다 사토시x테라오 겐 대담</h3>
                                <p>일본에서 만든 제품: Made in Japan에 담은 생각</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;