import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './App.css'

import NavBar from './Home/Components/NavBar/NavBar'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Header from './Home/Components/Header/Header';
import Detail from './Pages/Detail';
import Footer from './Home/Components/Footer/Footer';
import Newsletter from './Home/Components/Newsletter/Newsletter';
import About from './Pages/About';
import Cart from './Pages/Cart'
import ScrollToTop from './Hooks/ScrollToTop/ScrollToTop';
import Wishlist from './Pages/Wishlist';




import SignInPage from './Pages/Sign-in'
import SignUpPage from './Pages/Sign-up'
import SearchResult from './Pages/SearchResult';
import Checkout from './Pages/Checkout';
import Account from './Pages/Account';
import MobileNav from './Pages/MobileNav';



function App() {

  const [cartItem, setCartItem] =useState([]);
  const [wishItem, setWishItem] =useState([]);
 


{/*============CART=============*/}

const addtocart = (item) => {
  const cartQnty = document.querySelector('.add-qnty')
  const cartColor = document.querySelector('.color-selected')
  const cartSize = document.querySelector('.size-selected')
  const tempItems = [...cartItem];

    const exist = cartItem.find((x) => {
  
      return x.id === item.id;
      
    })
    if(exist){
      toast.error('Product Already Added')
    }
    else{
      /* setCartItem([...cartItem,{...item, quantity:cartQnty.value, size:cartSize.innerHTML, color:cartColor.innerHTML}]) */
      tempItems.push({...item, quantity:cartQnty.value, size:cartSize.innerHTML, color:cartColor.innerHTML})
      
      toast.success('Product Added to Cart')
    }
    setCartItem(tempItems)
    localStorage.setItem("cartItems", JSON.stringify(tempItems));
}




{/*============Wishlist=============*/}

const addToWishlist = (item) => {
  const tempItems = [...wishItem];

    const exist = wishItem.find((x) => {
  
      return x.id === item.id;
      
    })
    if(exist){
      toast.error('Product Already Added')
    }
    else{
      tempItems.push({...item, quantity:1})
      toast.success('Product Added to Wishlist')
     
    }
    setWishItem(tempItems)
    localStorage.setItem("wishItems", JSON.stringify(tempItems));

    
}

const getWish = () => {
  const FetchedWishtItems = localStorage.getItem("wishItems");
  if (FetchedWishtItems) {
    const parsedWishItems = JSON.parse(FetchedWishtItems);
    
    setWishItem(parsedWishItems);
  }
};

const getCart = () => {
  const FetchedcartItems = localStorage.getItem("cartItems");
  if (FetchedcartItems) {
    const parsedCartItems = JSON.parse(FetchedcartItems);

    setCartItem(parsedCartItems);
  }
};


useEffect(() => {
  getCart();
  getWish()
}, []);





  return (
   <BrowserRouter>
   <ScrollToTop />
   <ToastContainer
   position="bottom-right"
   autoClose={3000}
   hideProgressBar={false}
   newestOnTop={false}
   closeOnClick
  
   theme="dark"
   />

   <Header />
    <NavBar cartSize={cartItem.length} wishSize={wishItem.length} />
    <MobileNav />
    <Routes>
      <Route path='/' element={<Home addtocart={addtocart} addToWishlist={addToWishlist} setWishItem={setWishItem} wishItem={wishItem} />} />
      <Route path='shop' element={<Shop addtocart={addtocart} addToWishlist={addToWishlist} setWishItem={setWishItem} wishItem={wishItem} />} />
      <Route path='about' element={<About />} />
      <Route path='details/:productId' element={<Detail addtocart={addtocart} addToWishlist={addToWishlist} />} />
      <Route path='cart' element={<Cart addtocart={addtocart} addToWishlist={addToWishlist} cartItem={cartItem} setCartItem={setCartItem} />} />
      <Route path='wishlist' element={<Wishlist addtocart={addtocart} addToWishlist={addToWishlist} setWishItem={setWishItem} wishItem={wishItem} cartItem={cartItem} setCartItem={setCartItem} />} />
      <Route path='sign-in' element={<SignInPage  />} />
      <Route path='sign-in/factor-one' element={<SignInPage  />} />
      <Route path='sign-up' element={<SignUpPage  />} />
      <Route path='account' element={<Account />} />
      <Route path='checkout' element={<Checkout addtocart={addtocart} cartItem={cartItem} setCartItem={setCartItem}  />} />
      <Route path='search/:query' element={<SearchResult addToWishlist={addToWishlist} setWishItem={setWishItem} wishItem={wishItem} />} />
    </Routes>
    <Newsletter />
    <Footer />
   </BrowserRouter>
  );
}

export default App;
