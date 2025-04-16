import React, {useState} from 'react';
import CartModal from './CartModal';
import "./styles/Cart.css";

const Cart = () => { 
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (event) => {
        if (isOpen) {
            setIsOpen(false);
            return;
        }

        event.preventDefault();
        setIsOpen(true);
    };

    return (
        <div className="cartWrapper">
            <a onClick={handleClick} href="">
                <img src="/img/shopping_bag.svg" alt="Shopping Bag" />
            </a>
            {isOpen && <CartModal onClose={() => setIsOpen(false)} />}
        </div>
    );
};

export default Cart;