import React from 'react'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Banner from "../components/banner";
import Product from "../components/product";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Product />
      <Footer />
    </>
  )
}

export default Home