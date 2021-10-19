import { useState } from "react";
import {v1 as uuidv1} from 'uuid';
import { postProducts } from "../service";

const Form = ({setProducts , products}) => {
    const [productName,setProductName] = useState('')
    const [productPrice,setProductPrice] = useState('')
    const [productDescription,setProductDescription] = useState('')
    return ( 
        <div className='row my-5'>
            <form className='col-4 offset-4'>
            <div className='form-group'>
                <label htmlFor="product">Product:</label>
                <input className='form-control' type="text" name="product" id="product" onChange={(e) => {
                    setProductName(e.target.value)
                }} />
            </div>
            <div className='form-group'>
                <label htmlFor="price">price:</label>
                <input className='form-control' type="number" name="price" id="price" onChange={(e) => {
                    setProductPrice(e.target.value)
                }}/>
            <div className='form-group'>
                <label htmlFor="description">description:</label>
                <input className='form-control' type="text" name="description" id="description" onChange={(e) => {
                    setProductDescription(e.target.value)
                }} />
            </div>
            <button className='btn btn-info my-3' onClick={(e) => {
                e.preventDefault()
                let newProduct ={
                    id: uuidv1(),
                    name: productName,
                    price: productPrice,
                    info: productDescription
                }
                postProducts(newProduct).then((res) => {
                    setProducts([res.data,...products])
                })
            }}>Create New Product</button>
            </div>
        </form>
        </div>
     );
}
 
export default Form;