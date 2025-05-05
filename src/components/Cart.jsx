import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import CartModal from './CartModal';
import "./styles/Cart.css";
import shoppingBag from "../../public/img/shopping_bag.svg";

const Cart = () => { 
    const [isOpen, setIsOpen] = useState(false);
    const elements = useSelector((state) => state.reducer.itemList);

    const handleClick = () => {
        if (isOpen) {
            setIsOpen(false);
            return;
        } 

        setIsOpen(true);
    };

    useEffect(() => {
        if (elements.length > 0) {
            setIsOpen(true);
        }
    }, [elements]);

    return (
        <div className="cartWrapper">
            <div onClick={handleClick}>
                <img src={shoppingBag} alt="Shopping Bag" />
            </div>
            {isOpen && (
                <CartModal method={handleClick} onClose={() => setIsOpen(false)} />
            )}
        </div>
    );
};

export default Cart;