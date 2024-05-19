import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://codingapple1.github.io/shop/data2.json')
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
  return (
      <div className="App">
          <h1>Product List</h1>
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