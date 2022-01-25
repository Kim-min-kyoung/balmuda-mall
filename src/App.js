import './App.css';
import MainPage from './main';
import Header from './include/Header';
import Footer from './include/Footer';
import { Route, Routes } from 'react-router-dom';
import ProductView from './ProductView';
import ReviewList from './ProductReview/ReviewList';
import Store from './ProductView/ProductList';
import Recipe from './Recipe';
import Notice from './Notice/index';
// import NoticeView from './Notice/NoticeView';
import About from './About';
import Product from './Product'
import Join from './Login/Join';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products/:id/*" element={<ProductView />} />
        <Route path="/products/:id/review" element={<ReviewList />} />
        {/* <Route path="/products/:id/detail" element={<ProductDetail />} /> */}
        <Route path="/notice/*" element={<Notice />} />
        <Route path="/product/*" element={<Product />} />
        {/* <Route path="/notice/:id" element={<NoticeView />} /> */}
        <Route path="/recipes" element={<Recipe />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/join" element={<Join />} />
      </Routes>
      {/* <MainPage /> */}
      <Footer />
    </div>
  );
}

export default App;
