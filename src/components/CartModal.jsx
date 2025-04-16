import React from 'react';
import "./styles/CartModal.css";

const CartModal = () => {
    return (
        <div className="cartModalWrapper">
            <div className="cartModalContent">
                <div className="cartHeader">Your Cart</div>
                <div className="cartItems">
                    {/* Cart items will be dynamically generated here */}
                </div>
                <div className="cartTotal">Total: $0.00</div>
                <button className="checkoutButton">Checkout</button>
            </div>
        </div>
    );
};

export default CartModal;