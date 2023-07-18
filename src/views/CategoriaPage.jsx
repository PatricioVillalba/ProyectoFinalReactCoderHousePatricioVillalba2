import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs, documentId } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import CardProducto2 from "../components/cardProducto/carProducto2"
import Fab from "@mui/material/Fab";
import Spinner from "../components/Spinner/Spiner"

const CategoriaPage = () => {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const getProducto = async () => {
      const q = query(collection(db, "productos"), where("categoria", "==", categoria));
      const querySnapShot = await getDocs(q);
      const docs = [];
      querySnapShot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductos(docs);
      // console.log("prod", productos);
    };
    getProducto();
  }, [categoria]);

  return (
    <div>
      {isLoading ? (
        <Spinner /> 
      ) : (
        <div className="HomePageBis">
          <h1>Ver Productos por Categoria<strong></strong></h1>
          <h3>Estas viendo:   &nbsp;
            <Fab variant="extended" size="small" aria-label="add" sx={{ mr: 1, backgroundColor: 'white' }} >
              <strong>
                {categoria}
              </strong>
            </Fab></h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
            {productos
              ? productos.map((producto) => {
                { return <CardProducto2 producto={producto} key={producto.id} />; }
              })
              : null}
          </div>
        </div>
      )}
    </div>

  );

};

export default CategoriaPage; 