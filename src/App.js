import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./components/page/AddProduct";
import Login from "./components/page/Login";
import GlobalStyle from "./styles/GlobalStyle";


function App() {

  return (
    <div>
    
          <BrowserRouter>
          <GlobalStyle />
            <Routes>
              <Route path="/login" element={<Login/>}/>
              <Route path="/AddProduct" element={<AddProduct/>}/>
            </Routes>
          </BrowserRouter>
          </div>
          );
}

export default App;