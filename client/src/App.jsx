import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Menubar } from "primereact/menubar";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {Footer} from "./sections/footer";
import { Box } from "@chakra-ui/react";

import { Route, Routes } from "react-router-dom";
import {Products} from "./pages/Products";	
import products from "./docs/products";
import {Login} from "./pages/Login";	
import Register from "./pages/Register";
import { HotDeals } from "./pages/HotDeals";
import Verify from "./pages/Verify";
function App() {
	return (
		<>
			<Navbar />
			<Box
				margin={"auto"}
				padding={{
					xl: " 0% 7% 0% 7% ",
					"2xl": " 0% 16% 0% 16%",
					lg: "0% 8% 0% 8%",
          sm: "0% 2% 0% 2%",
					base: "0% 4% 0% 4%",
				}}
			>
			<Routes>
				<Route path="/" element={<Home/>}/>
			    <Route path="/products" element={<Products productsData={products} />}/>
				<Route path="/login" element={<Login/>}/>
				<Route path="/register" element={<Register/>}/>
				<Route path="/hotdeals" element={<HotDeals/>}/>
				<Route path="/verify" element={<Verify/>}/>
				
			</Routes>	
			
			</Box>
			<Footer/>
			
		</>
	);
}

export default App;
