import { BrowserRouter,Routes,Route} from "react-router"
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Products from "./Components/Products";
import Login from "./Components/Login";
import ProductDetails from "./Components/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={ <ProductDetails/>} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App;
