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
        </header>
    );
}
export default Header;