import React, {useEffect, useState} from 'react';
import axios from 'axios';
import main from "./view/main/main";

function App() {
  useEffect(() => {
    axios.get('https://codingapple1.github.io/shop/data3.json')
        .then(response => {
            let data = response.data;
            setProducts(data);
            setLoading(false);
            console.log(data)
        })
        .catch(error => {
            console.log(error)
            setError(error);
            setLoading(false);
        })
  }, []);
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    console.log('products = ', products)
  return (
      <div className="App">
          <h1>Product List</h1>
          <main />
          <ul>
              {products.map((product, index) => (
                  <li key={index}>
                      <h2>{product.title}</h2>
                      <p>{product.content}</p>
                      <p>{product.id}</p>
                      <p>{product.price}</p>
                  </li>
              ))}
          </ul>
      </div>
  );
}

export default App;