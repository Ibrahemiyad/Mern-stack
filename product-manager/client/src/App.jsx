import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import React from 'react'; 
import CreateProduct from './components/CreateProduct'; 
import DetailsProduct from './components/DetailsProduct'; 
import ListProduct from './components/ListProduct'; 
import UpdateProduct from './components/UpdateProduct'; 

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<><CreateProduct /> <ListProduct/> </>} />
        <Route path="/products/:id" element={<DetailsProduct />} />
        <Route path = "/products/:id/edit" element={<UpdateProduct />} />
      </Routes>
    </div>
  );
}

export default App;
