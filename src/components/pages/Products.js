import React from 'react'
import '../../App.css'
import productContent from './product-content'
import {Link} from 'react-router-dom'


export default function Products() {

    return (
        <div className='products'>
           

            {productContent.map(product => (
                <Link to={`/products-detail/${product.type}`}>
                <h7>{product.type}</h7>
                </Link>
            ))}
           



        </div>
    );
}