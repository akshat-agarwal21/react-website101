import React from 'react'
import '../../App.css'
import '../../components/Footer.css'
import productContent from './product-content'
import {Link} from 'react-router-dom'


export default function Products() {

    return (
        <div className='home'>
           

            {productContent.map(product => (
                <Link className="article-list-item" to={`/products-detail/${product.type}`}>
                <h7 className='article-list-head'>{product.type}</h7>
                <p>{product.content[0].substring(0, 150)}...</p>
                </Link>
            ))}
            
           



        </div>
    );
}
