import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Theme from './components/Theme'
import MainPage from './components/MainPage'
import ProductList from './components/product/ProductList'
import Login from './components/account/Login'
import Register from './components/account/Register';
import UserProfile from './components/account/UserProfile'
import Payment from './components/payment/Payment'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Theme />}>
          <Route path='/' element={<ProductList />}/>
          <Route path='/productList' element={<ProductList />}/>
          <Route path='main' element={<MainPage />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<UserProfile />} />
          <Route path='payment' element={<Payment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
