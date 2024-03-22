import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter} from "react-router-dom"
import Rout from './components/Rout/Rout';
import Footer from './components/Footer/Footer';
import Home_Products from './components/Products/Home_Products';
function App() {
  const [cart,setCart] = useState([]) 

  const [shop,setShop] = useState(Home_Products)

  const [search,setSearch]=useState('')

  const Filter = (x) => {
    const catefilter = Home_Products.filter((product) => {
      return product.cat === x
    })
    setShop(catefilter)
  }

  const allcatefilter = () => {
    setShop(Home_Products)
  }

  const searchlength = (search || []).length === 0
  const searchproduct = () =>
  {
  if (searchlength) {
    alert("Please Search Something ! ")
    setShop(Home_Products)
  } else {
     
      const searchfilter = Home_Products.filter((x) => {
        return x.cat === search
      })
      setShop(searchfilter)
    
  }
}

const addtocart = (product) => {
  const exist = cart.find((x) => {
    return x.id === product.id
  })
  if (exist) {
    alert("This Product is already added in cart")
  } else {
    setCart([...cart, {...product, qty:1}])
    alert("Added to cart")
  }
}
console.log(cart);
  return (
    <>
      <BrowserRouter>
      <Navbar search={search} setSearch={setSearch} searchproduct={searchproduct} />
      <Rout setCart={setCart} cart={cart} shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
