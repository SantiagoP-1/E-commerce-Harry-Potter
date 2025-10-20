import React from "react";

const ShoppingCartIcon = () => (
<span style={{ fontSize: "24px" }}>🛒</span>
);

const CartWidget = () => {
const count = 5;
return (
    <div className="cart-widget">
    <ShoppingCartIcon />
    <span className="cart-count">{count}</span>
    </div>
    );
};

export default CartWidget;
