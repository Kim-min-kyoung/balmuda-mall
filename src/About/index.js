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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;