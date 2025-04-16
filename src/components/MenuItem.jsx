import React from 'react';
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import "./styles/MenuItem.css";

const MenuItem = ({title, image, description, id, price, quantity}) => {
    const dispatch = useDispatch();
    const isHeader = document.querySelector("header");

    const increment = () => {
      dispatch(addToCart({ title, id, price, quantity }));
    };

    const decrement = () => {
        dispatch(removeFromCart({ title, id, price, quantity }));
    };

    return (
        <div className="menuItemWrapper">
        { isHeader ? 
            <div className="content">
                <img src={image} alt={title} />
                <div className="text">
                    <div className="title">{title}</div>
                    <div className="copy">${price} x{quantity} <span><b>Total: ${price*quantity}</b></span></div>
                    <div className="actions">
                        <button className="add" onClick={increment}>+ 1</button>
                        <button className="minus" onClick={decrement}>- 1</button>
                    </div>
                </div>
            </div>
            : 
            <div className="content">
                <img src={image} alt={title} />
                <div className="text">
                    <div className="title">{title}</div>
                    <div className="copy">{description} {price}</div>
                    <div className="actions">
                        <button className="add" onClick={increment}>+ 1</button>
                        <button className="minus" onClick={decrement}>- 1</button>
                    </div>
                </div>
            </div>
        }
        </div>
    );
};

export default MenuItem;