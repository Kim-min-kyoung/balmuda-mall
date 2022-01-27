import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const topBtn = styled.div`
    cursor: pointer;
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    color: #fbc000;
    background-color: white;
    padding: 0.5rem;
    font-size: 2rem;
    border: 1.5px solid #fbc000;
    border-radius: 50%;
    display: flex;
    opacity: 0.8;
    box-shadow: -1px 0 4px rgba(14, 55, 63, 0.15);
    transition: 0.6s;
`;
const topBtnActive = styled.div`
    display: none;
`;

const ScrollButton = (props) => {
    const [ScrollY, setScrollY] = useState(0);
    const [btnStatus, setBtnStatus] = useState(false); // 버튼 상태
  
    const handleFollow = () => {
        setScrollY(window.pageYOffset);
        if(ScrollY > 100) { // 100 이상이면 버튼이 보이게
            setBtnStatus(true);
        } else { // 100 이하면 버튼이 사라지게
            setBtnStatus(false);
        }
    }

    const handleTop = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        setScrollY(0);  // ScrollY 의 값을 초기화
        setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
    }

    useEffect(() => {
        const watch = () => {
        window.addEventListener('scroll', handleFollow)
        }
        watch();
        return () => {
            window.removeEventListener('scroll', handleFollow)
        }
    })
    return (
        <div className='container'>
            <button className={btnStatus ? topBtn : topBtnActive} // 버튼 노출 여부
                onClick={handleTop}  // 버튼 클릭시 함수 호출
            ><i class="fas fa-arrow-up"></i>
            </button>
        </div>
    );
}

export default ScrollButton;