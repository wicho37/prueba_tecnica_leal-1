import Navbar from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ProductList from "./components/porductos/ProductsList";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import ApiExito from "./components/ejemplos/ApiExito";
import Post from "./components/ejemplos/Post";




const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList /> } />
        <Route path="/ApiExito" element={<ApiExito /> } />
        <Route path="/post" element={<Post />} />
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
