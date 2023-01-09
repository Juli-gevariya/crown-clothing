import React from "react";

const ProductItem = (props) =>  {
    return(
        <div className="product-item" id={props.product_list.ID}>
            <div className="content">
                <img className="product-img" src={props.product_list.thumbnail} />
                <h1 className="title">{props.product_list.title}</h1>
                <span className="subtitle">{props.product_list.category}</span>
            </div>
        </div>
    )
}

export default ProductItem;