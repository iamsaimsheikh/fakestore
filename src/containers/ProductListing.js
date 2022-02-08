import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import ProductComponent from './ProductComponent'
import { setProducts } from '../redux/actions/productsActions'
import axios from 'axios'

const ProductListing = () => {

    const products = useSelector((state) => state)
    const dispatch = useDispatch();


    const fetchProducts = async () =>{
        const response = await axios.get('https://fakestoreapi.com/products')
        .catch(err => {
            console.log(err)
        })
        dispatch(setProducts(response.data))
    }

    useEffect(() =>{
        fetchProducts()
    },[])
    
    

    console.log(products)
    return (
        <div className='ui grid container'>
            <ProductComponent />
        </div>
    )
}

export default ProductListing