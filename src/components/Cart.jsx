import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import CartModal from './CartModal';
import "./styles/Cart.css";
import shoppingBag from "../../public/img/shopping_bag.svg";

const Cart = () => { 
    const [isOpen, setIsOpen] = useState(false);
    const elements = useSelector((state) => state.reducer.itemList);

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
            <div onClick={handleClick}>
                <img src={shoppingBag} alt="Shopping Bag" />
            </div>
            {isOpen ? <CartModal method={handleClick} onClose={() => setIsOpen(false)} /> : elements.length > 0 ? <CartModal method={handleClick} onClose={() => setIsOpen(false)} /> : isOpen}
        </div>
    );
};

export default Cart;