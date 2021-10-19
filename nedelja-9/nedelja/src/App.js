
import { useEffect, useState } from "react";
import Form from "./components/Form";
import ProductList from "./components/ProductList";
import Total from "./components/Total";
import { getAllProducts } from "./service";



function App() {
  const [products, setProducts] = useState([])
  const [total, setTotal] = useState(0)
  
  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res.data)
    })
    
  }, [])
  return (
    <div className="shop">
      <div>
        <h1 className='p-5 display-1 bg-success text-white text-center'>Admin</h1>
      </div>
      <Form setProducts = {setProducts} products={products}/>
      <ProductList products = {products} setProducts={setProducts}  setTotal={setTotal}/>
      <Total total={total}/>
    </div>
  );
}

export default App;
