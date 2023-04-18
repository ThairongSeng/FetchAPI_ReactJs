import React, { useEffect, useState } from 'react'

 export function Table() {

    const [products , setProducts] = useState ([]);
    const fetchProducts = () => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(Response => setProducts(Response.products))
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
                    <th scope="col">Brand</th>
                    <th scope="col">Category</th>
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
                            <td>{product.brand}</td>
                            <td>{product.brand}</td>
                        </tr>
                    </>
                )}
            </tbody>
        </table>
    </>
   )
}