import './App.css';
import MainPage from './main';
import Header from './include/Header';
import Footer from './include/Footer';
import { Route, Routes } from 'react-router-dom';
import ProductView from './ProductView/ProductView';
import Store from './ProductView/ProductList';
import Recipe from './Recipe';
import Notice from './Notice/index';
import About from './About';
import Product from './Product'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products/:id/*" element={<ProductView />} />
        <Route path="/notice/*" element={<Notice />} />
        <Route path="/product/*" element={<Product />} />
        <Route path="/recipes" element={<Recipe />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
