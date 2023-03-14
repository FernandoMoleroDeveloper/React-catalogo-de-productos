import React from 'react';
import { Link } from 'react-router-dom';
import {products} from "../../product-list"
import "./Products.css"


const Products =() => {

        return (
            <div className='container' >
                 {products.map(product => {
                    return(
                        <div className='container__box' key={product.id}>
                            <img className='container__img' src={product.image} alt={product.name}></img>
                            <p className='container__text'>{product.name}</p>
                            <Link to={'/productdetail/' + product.id}>Ver producto</Link>
                           
                        </div>
                    )
                 } )}
                
                
            </div>
        );
    
}


export default Products;