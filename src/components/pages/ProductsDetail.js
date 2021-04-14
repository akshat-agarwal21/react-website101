import React from 'react'
import productContent from './product-content'
function ProductsDetail({match}) {
    const name = match.params.name;
    const product = productContent.find(product => product.type === name);

    if(!product) return <h1>Product does not exist</h1>

    return (
        <div>
            <h1>{product.type}</h1>
            {product.content.map((paragraph,key)=> (
                <p key ={key}>
                    {paragraph}
                </p>
            ))}
        </div>
    )
}


export default ProductsDetail
