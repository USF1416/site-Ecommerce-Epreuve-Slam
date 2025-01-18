import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Panier = () => {
    const url = 'http://localhost:5000/api/commande_produit/';
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(`${url}`)
            .then((response) => setItems(response.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <>
        </>
    );
};

export default Panier;
