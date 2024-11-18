import Navbar from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ProductList from "./components/porductos/ProductsList";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import ApiExito from "./components/ejemplos/ApiExito";
import Post from "./components/ejemplos/Post";
import ItemDetailProducts from "./components/ItemDetailProducts/ItemdetailProducts";
import { CartContext }  from "./context/CartContext"
import { useState } from "react";



const App = () => {
  const [cart, setCart] = useState([])
  console.log(cart)

  return (
    <CartContext.Provider value={{
      cart,
      setCart
    }}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList /> } />
        <Route path="/productos/:categoryId" element={<ProductList /> } />
        <Route path="/detail/:itemId" element={<ItemDetailProducts />} />
        <Route path="/ApiExito" element={<ApiExito /> } />
        <Route path="/post" element={<Post />} />
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
    </CartContext.Provider>
  );
};

export default App;
