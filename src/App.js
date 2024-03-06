
import './App.css';

import Nav from './Component/Nav';
import Products from './Component/Products';
import Cart from './Component/Cart';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
    
      <Routes>
      <Route path="/" element={<Nav />} > 
        <Route index element={<Products />} />   
        <Route path="cart-items" element={<Cart />} />   
      </Route>
      </Routes>
      
      </BrowserRouter>
   
         
      
      
      
    </div>
  );
}

export default App;
