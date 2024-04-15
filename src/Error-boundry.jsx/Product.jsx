import React from 'react';

const Product = ({ product }) => {
    console.log(product);

    if (product === "Bags") {
        throw new Error('This is not available');
    }

    return (
        <div>{product}</div>
    );
}

export default Product;
