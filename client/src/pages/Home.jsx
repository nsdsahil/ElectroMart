import React from 'react'
import Carousel from '../components/Carousel'
import {brands, carouselImages, promise} from '../assets/image'
import  {categories}  from '../assets/image'
import  {Categories}  from '../sections/Categories'
import { GridBanner } from '../components/GridBanner'
import { FlexBanner } from '../components/FlexBanner'
import { Guide } from '../sections/guide'
import guide from '../docs/guide'
import ProductSlider from '../sections/ProductSlider'
import products from "../docs/products"
import { Footer } from '../sections/footer'
import { GridBanner2 } from '../components/GridBanner2'
import ProductSlider2 from '../sections/ProductSlider2'
import { bannerImages } from '../assets/image'
import {Flex} from "@chakra-ui/react"
import { AdvertiseBanner } from '../components/AdvertiseBanner'


/**
* @author sahil nishad
* @function Home
**/

const Home = () => {
  const [products, setProducts] = React.useState([]);
  const [products2, setProducts2] = React.useState([]);
  React.useEffect(() => {
		async function getProducts() {
			try {
				const res = await fetch("https://sears-40h2.onrender.com/products/65c5d513216f075027acbf8e/tvElectronics");
				const data = await res.json();
				console.log(res);
				setProducts(data.hotDeals);
			} catch (error) {
				console.log(error);
			}
		}
		getProducts();
	},[]);
  React.useEffect(() => {
		async function getProducts() {
			try {
				const res = await fetch("https://sears-40h2.onrender.com/products/65c63744c69908f6bf402bb1/tvElectronics");
				const data = await res.json();
				console.log(res);
				setProducts2(data.tvAndElectronics);
			} catch (error) {
				console.log(error);
			}
		}
		getProducts();
	},[]);
  

    
  return(
    <>
	
    <Carousel images={carouselImages} />
	<ProductSlider products={products}/>
    
    <Categories   categories={categories} heading={"SHOP BY CATEGORY"}/>
    
    <GridBanner heading={"WORK IN SOME SAVINGS"}/>
    <Categories categories={brands} heading={"SHOP OUR TOP BRANDS "}/>
    <FlexBanner/>
    <GridBanner2 heading={"OUR APPlIANCES PROMISE"}/>
    <Categories categories={promise} heading={"OUR APPlIANCES PROMISE"}/>
    <FlexBanner/>
    <Guide heading={"Sears Guide"} docs={guide}/>
	<ProductSlider2 products={products2}/>
    
    
    </>
   )
  }
export default Home