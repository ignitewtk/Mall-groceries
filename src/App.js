import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Theme from './components/Theme'
import MainPage from './components/MainPage'
import ProductList from './components/product/ProductList'
import Login from './components/account/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Theme />}>
          <Route path='main' element={<MainPage />}/>
          <Route path='productList' element={<ProductList />}/>
          <Route path='/login' element={<Login />} />
        </Route>
        

        {/* <Route path='/login' element={<Login />}/> */}
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
