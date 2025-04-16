import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import "./styles/CartModal.css";

const CartModal = ({ method }) => {
    const elements = useSelector((state) => state.reducer.itemList);

    const handleClick = () => {
        method();
    };
    
    
    if (elements.length > 0) {
        return (
            // fix issue with close button not working when an item is in the cart
            <div className="cartModalWrapper">
                <div className="close" onClick={handleClick}><img src="../../public/img/close.svg" alt="close" /></div>
                <ul>
                    {elements.map((item) => (
                        <li key={item.id}>
                            <MenuItem
                                title={item.title}
                                quantity={item.quantity}
                                id={item.id}
                                price={item.price}
                            />
                        </li>
                    ))}
                </ul>
          </div>
        );
      } else {
        return (
            <div className="cartModalWrapper">
                <div className="close" onClick={handleClick}><img src="../../public/img/close.svg" alt="close" /></div>
                <div className="empty">Bag is empty</div>
            </div>
        );
      }
};

export default CartModal;