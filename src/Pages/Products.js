import React from 'react'
import { useState, createContext } from "react";
import { data } from "../data";
import Card from "../Components/Card";
import Button from "../Components/Button";
import "./Products.css"
// import Card from 'react-bootstrap/Card';
// import bg from '../assets/bg1.jpg';

function Products() {

    const [cards, setCards] = useState(data);
    const cats = ["all", ...new Set(data.map((card) => card.category))];

    const filter = (cat) => {
        if (cat === "all") {
            setCards(data);
            return;
        }
        setCards(data.filter((item) => item.category === cat));
    };
    return (
        <div>
            <Button categories={cats} handleClick={filter} />
            <Card allcards={cards} />
            <br />
            <br />
            <br />

        </div>
    )
}

export default Products;