import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproducts from './components/Getproducts';
import Makepayment from './components/Makepayment';
function App() {
  return (
    <Router>
      <div className='App bg-overlay'>
    
     
      <Routes>
        <Route path= '/Signup' element={<Signup/>}/>

        <Route path= '/Signin' element={<Signin/>}/>

        <Route path= '/Addproduct' element={<Addproduct/>}/>

        <Route path= '/' element={<Getproducts/>}/>
        <Route path= '/makepayment' element={<Makepayment/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
