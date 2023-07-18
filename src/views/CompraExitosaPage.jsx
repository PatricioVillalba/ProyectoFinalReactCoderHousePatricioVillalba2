import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext ";
import { Link } from "react-router-dom";
import CardProducto from "../components/cardProducto/cardProducto";
import Alerta from "../components/Alerta/Alerta";
import Spinner from "../components/Spinner/Spiner";

const Carrito = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <div>
            {isLoading ? (
                <Spinner />
            ) : (
                <div>
                    {purchaseID && <Alerta purchaseID={purchaseID}></Alerta>}
                </div>
            )}
        </div>

    );
};

export default Carrito;