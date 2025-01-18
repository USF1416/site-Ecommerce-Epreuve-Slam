import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemList = () => {
    const url = 'http://localhost:5000/api/produits/';
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(`${url}`)
            .then((response) => setItems(response.data))
            .catch((error) => console.error(error));
    }, []);

    const deleteItem = (id) => {
        axios.delete(`${url}${id}`)
            .then(() => setItems(items.filter(item => item.id !== id)))
            .catch((error) => console.error(error));
    };

    return (
        <div className="product-grid">
            <ul>
                {items.map(item => (
                <li key={item.id} className="product">
                    <img src={item.image} alt={item.nom} />
                    <h3>{item.nom}</h3>
                    <p>{item.prix}€</p>
                    <p>{item.description}</p>
                    <button onClick={() => deleteItem(item.id)}>Delete</button>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
