import React, { FC, useEffect, useState } from 'react'
import './componet-styles/home.css'
import axios from 'axios'
import profile from '../assets/Ellipse 1.png'
import arrowRight from '../assets/Keyboard arrow right.png'

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

const Home: FC = () => {

  const [data, setData] = useState<Product[]>([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => {
        setData(res.data.products);
      })
      .catch(err => console.log(err));
  }, []);

  console.log(data)


  return (
    <div className='home-container'>
      <div className="home-search-input">
        <img src={profile} alt="Profile" />
        <input className='home-walker' type="text" placeholder='Products Search here...' />
        <i className="glass fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="home-product">
        {
          data && data.length ? data.map((product) => (
            <div key={product.id} className='home-layout'>
              <img width={300} src={product.thumbnail} alt="" />
              <h3>{product.title}</h3>
            </div>
          )) : null
        }
      </div>
    </div>
  )
}

export default Home
