import './App.css';
import MainPage from './main';
import Header from './include/Header';
import Footer from './include/Footer';
import { Route, Routes } from 'react-router-dom';
import ProductView from './ProductView';
import ReviewPage from './review';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products/:id" element={<ProductView />} />
        <Route path="/review" element={<ReviewPage />} />
      </Routes>
      {/* <MainPage /> */}
      <Footer />
    </div>
  );
}

export default App;
