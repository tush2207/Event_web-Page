import React from 'react';
import Product from '../front/Product/Product';
import { Link } from 'react-router-dom';


export default function Main(props){

    const{Product, onAdd} = props;
    return (
        <main className='block col-2'>
            <h2>Products</h2>
            <div className='row'>
                {Product.map((product) => (
                    <Product key={Product.id} Product={Product} onAdd={onAdd}></Product>
                ))}
            </div>
        </main>
    )
}