import axios from "axios";

export const getAllProducts = ()=>{
    return axios.get('http://localhost:3005/products')
}
export const postProducts = (product) =>{
    return axios.post('http://localhost:3005/products',product)
}
export const deleteUsers = (id) =>{
    return axios.delete(`http://localhost:3005/products/${id}`)
}