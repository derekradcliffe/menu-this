import React from 'react';
import "./styles/MenuItem.css";

const MenuItem = ({title, image, description}) => {
    return (
        <div className="menuItemWrapper">
            <div className="content">
                <img src={image} alt={title} />
                <div className="text">
                    <div className="title">{title}</div>
                    <div className="copy">{description}</div>
                    <button className="order">Order</button>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;