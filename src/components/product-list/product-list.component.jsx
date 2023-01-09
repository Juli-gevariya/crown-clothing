import React from "react";
import ProductItem from '../single-product/single-product.component';

const ProductList = (props) => {
    const product_list = props.product_list;
    return(
        <div className="product-list" key={product_list.length}>
            {
                product_list.map((product_list,i) => {
                    return(
                        <ProductItem key={i} product_list={product_list}/>
                )})
            }
        </div>
    )
}

export default ProductList;