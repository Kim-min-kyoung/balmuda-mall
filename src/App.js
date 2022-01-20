import './App.css';
import MainPage from './main';
import Header from './include/Header';
import Footer from './include/Footer';
import { Route, Routes } from 'react-router-dom';
import ProductView from './ProductView';
import ReviewList from './ProductReview/ReviewList';
import Store from './Store';
import Recipe from './Recipe';
import Support from './Support';
import About from './About';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products/:id" element={<ProductView />} />
        <Route path="/products/:id/review" element={<ReviewList />} />
        {/* <Route path="/products/:id/detail" element={<ProductDetail />} /> */}
        <Route path="/support" element={<Support />} />
        <Route path="/recipes" element={<Recipe />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <MainPage /> */}
      <Footer />
    </div>
  );
}

export default App;
