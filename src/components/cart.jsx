import React from 'react'
const Cart = (props) => {

    const style = !props.product.selected? {color:"#80808080", cursor: "pointer"}:{cursor: "pointer"};
    
    return (
        <i style={style} onClick={() => props.selected(props.product)} className="fa-solid fa-cart-plus"></i>
    );
}

export default Cart;