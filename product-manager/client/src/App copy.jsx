import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import React from 'react'; 
import ProductForm from './components/ProductForm'; 
import DetailsProduct from './components/DetailsProduct'; 
import ListProduct from './components/ListProduct'; 
import UpdateProduct from './components/UpdateProduct'; 

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<><ProductForm /> <ListProduct/> </>} />
        <Route path="/products/:id" element={<DetailsProduct />} />
        <Route path = "/products/edit/:id" element={<UpdateProduct />} />
      </Routes>
    </div>
  );
}

export default App;
