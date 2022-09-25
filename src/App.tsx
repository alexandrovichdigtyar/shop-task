import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import './App.scss';
import Header from './components/Header/Header';
import AboutProduct from './pages/Home/AboutProduct/AboutProduct';
import Home from './pages/Home/Home';
import { useAppDispatch } from './reduxToolkit/hooks';
import { fetchProductList } from './reduxToolkit/productsSlice';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProductList())
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/' element={<AboutProduct />} />
      </Routes>
    </>
  );
}

export default App;
