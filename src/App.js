import logo from './logo.svg';
import './App.css';

import { lazy, Suspense } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Theme from './components/Theme'
// import MainPage from './components/MainPage'
import ProductList from './components/product/ProductList'
import Login from './components/account/Login'
// import Register from './components/account/Register';
// import UserProfile from './components/account/UserProfile'
// import Payment from './components/payment/Payment'
const Register = lazy(() => () => import('./components/account/Register'))
const MainPage = lazy(() => import('./components/MainPage'))
const UserProfile = lazy(() => import('./components/account/UserProfile'))
const Payment = lazy(() => import('./components/payment/Payment'))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Theme />}>
          <Route path='/' element={<ProductList />}/>
          <Route path='/productList' element={<ProductList />}/>
          
          <Route path='main' element={
            <Suspense fallback={() => <h4> Loading main page...</h4>}>
              <MainPage />
            </Suspense>
          }/>
          <Route path='/login' element={<Login />} />
          
          <Route path='/register' element={
            <Suspense fallback={() => <h4> Loading register...</h4>}>
              <Register />
            </Suspense>
          } />
          
          <Route path='/profile' element={
            <Suspense fallback={() => <h4> Loading Profile page...</h4>}>
              <UserProfile />
            </Suspense>
          } />
          
          <Route path='payment' element={
            <Suspense fallback={() => <h4> Loading payment page...</h4>}>
              <Payment />
            </Suspense>
          } />
          {/* <Route path='main' element={<MainPage />}/>
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<UserProfile />} />
          <Route path='payment' element={<Payment />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
