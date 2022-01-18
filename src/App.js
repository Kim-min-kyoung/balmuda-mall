import './App.css';
import MainPage from './main';
import Header from './include/Header';
import Footer from './include/Footer';
import { Route, Routes } from 'react-router-dom';
import ProductView from './ProductView';
// import ProductReview from './ProductReview';
import Store from './Store';
import Recipe from './Recipe';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products/:id" element={<ProductView />} />
        {/* <Route path="/products/:id/reviews" elemet={<ProductReview />} /> */}
        <Route path="/recipes" element={<Recipe />} />
        <Route path="/store" element={<Store />} />
      </Routes>
      {/* <MainPage /> */}
      <Footer />
    </div>
  );
}

export default App;
