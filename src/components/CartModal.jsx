import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import "./styles/CartModal.css";
import close from "../../public/img/close.svg";

const CartModal = ({ method }) => {
    const elements = useSelector((state) => state.reducer.itemList);

    const handleClick = () => {
        method();
    };
    
    
    if (elements.length > 0) {
        return (
            <div className="cartModalWrapper">
                <div className="close" onClick={handleClick}><img src={close} alt="close" /></div>
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
                <div className="close" onClick={handleClick}><img src={close} alt="close" /></div>
                <div className="empty">Bag is empty</div>
            </div>
        );
      }
};

export default CartModal;