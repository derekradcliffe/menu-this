import React from 'react';
import MenuItem from "./MenuItem";
import "./styles/Menu.css";
import data from "../data.json";

const Menu = () => {
    const chunkArray = (array, size) => {
        const result = [];

        for (let index = 0; index < array.length; index += size) {
            result.push(array.slice(index, index + size));
        }

        return result;
    };

    return (
        <div className="menuWrapper">
            {chunkArray(data.foods, 3).map((row, rowIndex) => (
                <div className="row" key={rowIndex}>
                    {row.map((item, index) => (
                        <MenuItem 
                            key={index}
                            title={item.title}
                            image={item.image}
                            description={item.description}
                            id={item.id}
                            price={item.price}
                            quantity={item.quantity}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Menu;
