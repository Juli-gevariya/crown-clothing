import {React} from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import { Link,Route,Routes} from 'react-router-dom';
import HeaderMenu from './components/header/header.component';


const App = () => { 
  return(
    <div className='main-site'>
      <HeaderMenu />
       <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  )
}

export default App;

