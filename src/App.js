import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import './App.css';

function App() {
  
 
  return (
    
      <BrowserRouter>
     <Header/>
     <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route exact path='/products' element={<Products/>} />
    
    </Routes>
      </BrowserRouter>
     
  );
};


export default App;