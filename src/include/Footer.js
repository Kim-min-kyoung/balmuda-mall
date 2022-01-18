import { SiFacebook, SiNaver, SiTwitter, SiYoutube, SiInstagram } from 'react-icons/si';
function Footer(){
    return(
        <footer>
            <div id="info">
                <div className="innerCon">
                    <ul>
                        <li>
                            <h3>News</h3>
                            <ul>
                                <li>「BALMUDA The Brew」 출시</li>
                                <li>「BALMUDA The Range」 출시</li>
                                <li>「BALMUDA The Cleaner」 출시</li>
                                <li>「BALMUDA The Speaker」 출시</li>
                                <li>「GreenFan C2」 출시</li>
                                <li>「BALMUDA The Lantern」 출시</li>
                                <li>「BALMUDA The Pure」 다크 그레이</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Support</h3>
                            <ul>
                                <li>Customer Support</li>
                                <li>Contact info</li>
                                <li>After Service</li>
                                <li>Product Registration</li>
                                <li>Notice</li>
                                <li>Event</li>
                                <li>Video</li>
                            </ul>
                        </li>
                        <li>
                            <h3>About</h3>
                            <ul>
                                <li>About BALMUDAT</li>
                                <li>History</li>
                                <li>Awards</li>
                                <li>Online Store</li>
                                <li>Offline Store</li>
                            </ul>  
                        </li>
                        <li>
                            <h3>Store</h3>
                            <ul>
                                <li>Online Store</li>
                                <li>Offline Store</li>
                            </ul>
                            <h3>SNS</h3>
                            <ul id="snsMenu">
                                <li><SiFacebook /></li>
                                <li><SiNaver /></li>
                                <li><SiTwitter /></li>
                                <li><SiYoutube /></li>
                                <li><SiInstagram /></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="footer-menu">
                <div id="fmenu">
                    <div className="innerCon">
                        <ul>
                            <li>개인정보처리방침</li>
                            <li>이용약관</li>
                        </ul>
                    </div>
                </div>
                <div id="fcopy">
                    <div className="innerCon">
                        <p>회사명 (주)한국리모텍   대표이사 황영철   주소 서울특별시 용산구 원효로3가 53-5 청진빌딩 13층 <br/>
                        (주)한국리모텍 사업자등록번호114-86-20463 통신판매업신고 제2004-서울용산-02840 <br/>
                        대표번호 02-710-4100   팩스 02-710-4199   이메일 evan@balmuda.co.kr  개인정보책임관리자: 김성중 <br/>
                        본 사이트의 컨텐츠는 저작권법의 보호를 받는 바, 상업적 목적의 무단전재, 복사, 배포 등을 금합니다. <br/></p>
                        <div id="footerLogo">
                            <h4><img src="img/logo_s.svgz" alt="스몰로고" /></h4>
                            <p>Copyright © BALMUDA Inc. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;