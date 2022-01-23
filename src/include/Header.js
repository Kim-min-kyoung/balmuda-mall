import { BsCart4 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header>
            <div className="innerCon headerDiv">
                <p id="logo"><Link to="/"><img src="img/logo.svgz" alt="로고"/></Link></p>
            </div>
            <div className="innerCon headerDiv">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="./product">Products</Link></li>
                    <li><Link to="./about">About</Link></li>
                    <li><Link to="./notice">Notice</Link></li>
                    <li><Link to='./store'>Store<span /><BsCart4 id="icons" /></Link></li>
                </ul>
            </div>
            {/* <div id="hideMenu">
            <div class="hideMenu_wrap">
                    <div class="hideMenu_group">
                        <div class="group_kitchen">
                            <h4 class="title"><em>Kitchen</em></h4>
                            <a href="/toaster/"><span class="group_name">BALMUDA The Toaster<br/><span>스팀 토스터</span></span></a>
                            <a href="/pot/"><span class="group_name">BALMUDA The Pot<br/><span>전기주전자</span></span></a>
                            <a href="/brew/"><span class="group_name">BALMUDA The Brew<br/><span>커피 메이커</span></span></a>
                            <a href="/range/"><span class="group_name">BALMUDA The Range<br/><span>오븐 레인지</span></span></a>
                        </div>
                        <div class="group_recipe">
                            <h4 class="title"><em>Recipe</em></h4>
                            <a href="/recipe/"><span class="group_name">The Recipe<br/><span>발뮤다 레시피</span></span></a>
                        </div>
                    </div>
					<div class="hideMenu_group">
						<h4 class="title"><em>Air</em></h4>
						<div class="wrap">
							<a href="/pure/"><span class="group_name">BALMUDA The Pure<br/><span>NEW 공기청정기</span></span></a>
							<a href="/airengine/"><span class="group_name">AirEngine<br/><span>공기청정기</span></span></a>
							<a href="/greenfan-c2/"><span class="group_name">GreenFan-c2<br/><span>선풍기</span></span></a>
							<a href="/greenfan-cirq/"><span class="group_name">GreenFan Cirq<br/><span>서큘레이터</span></span></a>
							<a href="/greenfans/"><span class="group_name">GreenFan S<br/><span>NEW 프리미엄 선풍기</span></span></a>
							<a href="/greenfan/"><span class="group_name">GreenFan<br/><span>프리미엄 선풍기</span></span></a>
							<a href="/humidifier/"><span class="group_name">Humidifier<br/><span>가습기</span></span></a>
						</div>
					</div>
                    <div class="hideMenu_group">
						<h4 class="title"><em>Lighting</em></h4>
                        <div class="wrap">
                            <a href="/lantern/"><span class="group_name">BALMUDA The Lantern<br/><span>무선 LED 랜턴</span></span></a>
						    <a href="/light/"><span class="group_name">BALMUDA The Light<br/><span>태양광 LED 데스크 라이트</span></span></a>
                        </div>
					</div>
                    <div class="hideMenu_group">
							<div class="group_audio">
								<h4 class="title"><em>Audio</em></h4>
								<a href="/speaker/"><span class="group_name">BALMUDA The speaker<br/><span>블루투스 스피커</span></span></a>
							</div>
							<div class="group_cleaner">
								<h4 class="title"><em>Cleaner</em></h4>
								<a href="/cleaner/"><span class="group_name">BALMUDA The Cleaner<br/><span>무선 청소기</span></span></a>
							</div>
					</div>
				</div>
            </div> */}
        </header>
    );
}
export default Header;