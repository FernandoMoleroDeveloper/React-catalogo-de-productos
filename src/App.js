import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import MyAccount from './components/MyAccount';
import Login from './components/Login';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import ProductDetail from './components/ProductDetail/ProductDetail';


// Componentes lazy

const NotFound = React.lazy(() => import("./components/NotFound"));

// Contexto de login
export const AuthContext = React.createContext({ user: null });

function App() {
  // Estado del login
  const [authInfo, setAuthInfo] = React.useState({ user: null , favproduct: null });
  
  return (

    <AuthContext.Provider value={authInfo}>

      <div className="app">
        <BrowserRouter>

          <Header></Header>
          

          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/products/products' element={<Products></Products>}></Route>
            <Route path='/login' element={<Login login={setAuthInfo}></Login>}></Route>
            <Route path='/my-account' element={<MyAccount></MyAccount>}></Route>
            <Route path="*" element={<React.Suspense fallback={<p>Cargando...</p>}> <NotFound></NotFound> </React.Suspense>}></Route>
            <Route path='/productdetail/:id' element={<ProductDetail login={setAuthInfo}></ProductDetail>} ></Route>
          </Routes>

        </BrowserRouter>

      </div>

    </AuthContext.Provider>

  );
}

export default App;
