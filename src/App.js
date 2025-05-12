import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Signup from './components/Signup';
import Signin from './components/Signin';
import Cart from './components/Cart';
import Addproduct from './components/Addproduct';
import AboutUs from './components/AboutUs';

import SkinQuiz from './components/SkinQuiz';
import Getproducts from './components/Getproducts';
import Makepayment from './components/Makepayment';

function App() {
  return (
    
    <Router>
      <div className='App'>
    
     
      <Routes>
        <Route path= '/Signup' element={<Signup/>}/>

        <Route path= '/Signin' element={<Signin/>}/>
          <Route path="/cart" element={<Cart />} />
        
<Route path="/about" element={<AboutUs />} />

        <Route path= '/Addproduct' element={<Addproduct/>}/>
        <Route path="/skinquiz" element={<SkinQuiz />} />

        <Route path= '/' element={<Getproducts/>}/>
        <Route path= '/makepayment' element={<Makepayment/>}/>
      </Routes>
    </div>
    </Router>
    
  );
}


export default App;
