import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/header";
import AllProducts from "./Components/AllProducts";
import ProductView from "./Components/ProductView";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/products/:productId" element={<ProductView />} />
          <Route path="/products" element={<AllProducts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
