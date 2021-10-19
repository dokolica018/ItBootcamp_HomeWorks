import Product from "./Product";

const ProductList = ({products, setTotal, setProducts}) => {
    return ( 
        <div className='row container container-fluid m-auto'>
            {products.map(product => <Product setProducts={setProducts} setTotal={setTotal}  key= {product.id} product={product} />)}
        </div>
     );
}
 
export default ProductList;