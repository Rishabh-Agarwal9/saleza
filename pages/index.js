import React from "react";
import { client } from "../lib/client";

import { Product,FooterBanner, HeroBanner } from "../components";


const Home = ({products, bannerData}) => {
  return (
    <>
        <HeroBanner heroBanner = {bannerData.length&& bannerData[0]}/>
        <div className='products-heading'>
          <h2>Best selling products</h2>
          <p>Speakers</p>
          <div className='products-container'>
           {products?.map(
            // passing product id product as props to Product component
            (product)=><Product key ={product._id} product ={product}/>)} 
          </div>
        </div>

        <FooterBanner FooterBanner ={bannerData && bannerData[0]}/>
    </>
  )
}

//runs at request time. Runs only on server side and page is prerendered with returned props

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}
export default Home;