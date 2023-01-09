import React from "react";
import { useState, useEffect } from "react";
import ProductList from '../../components/product-list/product-list.component';
import './shoppage.styles.scss';
const ShopPage = () => {
    const [productList,setProductList] = useState([]);

    useEffect(() => {
        fetch('http://192.168.11.61/wocommerce-practice/wp-json/wp-get-products/v1/product-list')
        .then((response) => response.json())
        .then((data) => setProductList(data))
    },[])
    return(
        <div className="homepage">
            <ProductList product_list={productList}/>
        </div>
    )
}

export default ShopPage;