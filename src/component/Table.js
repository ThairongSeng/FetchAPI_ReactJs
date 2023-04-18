import React, { useEffect, useState } from 'react'

 export function Table() {

    const [products , setProducts] = useState ([]);
    const fetchProducts = () => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json())
        .then(Response => setProducts(Response))
    }
    useEffect(() => {
       fetchProducts()
    },[])

  return (
    <>
        <table className="table">
            <thead>
                <tr className="table-warning">
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Image</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product => 
                    <>
                        <tr className="table-light">
                            <th scope="row">{product.id}</th>
                            <td>{product.title}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td> <img src={product.images} style={{width : '50px'}}/></td>
                        </tr>
                    </>
                )}
            </tbody>
        </table>
    </>
   )
}