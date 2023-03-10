import {React} from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Link,Route,Routes} from 'react-router-dom';
import HeaderMenu from './components/header/header.component';
import {Axios} from 'axios';


const App = () => { 
  const getWPnonce= () =>{
    Axios.get('http://192.168.11.61/wocommerce-practice/wp-json/wp-get-products/v1/product-list').then((res) =>console.log(res));
  }
  // console.log(getWPnonce);      
  return(
    <div className='main-site'>
      <HeaderMenu />
       <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/sign-in-and-sign-up" element={<SignInAndSignUp />} />
      </Routes>
    </div>
  )
}

export default App;

