import React, {useState} from 'react'   
import Products from "../data/Products";
import ProductsCard from './ProductsCard';
import './style.css'


//Products.map()  will generate all categories along with repeatation
//put all under new Set()  will solve duplicate issue
//keeping under [] will gives data in array
//use ...  Spread Operator to get exact desired data in array format.
const uniqueList=[...new Set(Products.map((curElem)=>{
    return curElem.category;
}))]

console.log(uniqueList)

const ProductList = () => {

    const [productData,setProductData]=useState(Products);
    //console.log(productData)

    const filterItem=(category)=>{
        const updatedList=Products.filter((curElem)=>{
            return curElem.category===category;
        })
        setProductData(updatedList)
    }
        return (
            <>
            <nav className="navbar">
                <div className="btn-group">
                    <button className="btn-group_item" onClick={()=>setProductData(Products)}>All</button>
                    <button className="btn-group_item" onClick={()=>filterItem("leafy")}>Green Vegetables</button>
                    <button className="btn-group_item" onClick={()=>filterItem("seasonal")}>Seasonal</button>
                </div>
            </nav>
            <ProductsCard productData={productData}/>
            </>
  );
};

export default ProductList;
