import { useState } from "react";
import { deleteUsers} from '../service.js';

const Product = ({ product, setTotal,setProducts }) => {
    const [quantity, setQuantity] = useState(0)
    const [info, setInfo] = useState('Show Info')
    const [productInfo, setProductInfo] = useState('')
    return (
        <div className="col-3 my-5">
            <h6 style={{ fontSize: '14px' }}>Name: <span style={{ fontSize: '16px', color: 'tomato' }}>{product.name}</span> </h6>
            <p>price: {product.price}</p>
            <p>Quantity: {quantity}</p>
            <p>{productInfo}</p>
            <button className='btn btn-info btn-sm' onClick={(e) => {
                let info = e.target.innerHTML
                if (info === 'Show Info') {
                    setInfo('Hide Info')
                    setProductInfo(product.info)
                } else {
                    setInfo('Show Info')
                    setProductInfo('')
                    
                }
                
            }}>{info}</button><br />
            <button className="btn btn-warning btn-sm" onClick={() => {
                let copy = quantity
                copy++
                setQuantity(copy)
                setTotal(prev=>[Number(prev)+Number(product.price)])
            }}>+</button>
            <button  className="btn btn-success btn-sm" onClick={() => {
                let copy = quantity
                copy--
                setQuantity(copy >= 0 ? copy : 0)
                setTotal(prev=>[Number(prev)-Number(product.price)])
            }}>-</button>
            <button  className="btn btn-danger btn-sm" onClick={() => {
                if (window.confirm('Delete this product?')) {
                    deleteUsers(product.id).then(() => {
                        console.log('Obrisano');
                    }) 
                    setProducts((prev) => {
                      let kopija = [...prev]
                      let indeks = kopija.findIndex(el => el.id === product.id)
                      // let indeks = kopija.indexOf(product)
                      kopija.splice(indeks, 1)
                      return kopija
                    })
                    
                }

            }}>x</button>

        </div>
    );
}

export default Product;