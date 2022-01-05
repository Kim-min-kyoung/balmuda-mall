import './main.scss';
function MainPage() {
    return (
        <header>
            <div className="innerCon">
                <a href="/"><img src="img/logo.svgz" alt="로고"/></a>
            </div>
            <div className="innerCon">
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>About</li>
                    <li>Support</li>
                    <li>Store</li>
                </ul>
            </div>
        </header>
    );
}

export default MainPage;