import { React, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs, documentId } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import CardProductoDetalle from "../components/cardProducto/cardProductoDetalle"
import Spinner from "../components/Spinner/Spiner"

const DetailPage = () => {
  const [producto, setProducto] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const { id } = useParams();
  useEffect(() => {
    const getProducto = async () => {
      const q = query(collection(db, "productos"), where(documentId(), "==", id));
      const querySnapShot = await getDocs(q);
      const docs = [];
      querySnapShot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProducto(docs);
      // console.log(producto);
    };
    getProducto();
  }, []);
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          {producto
            ? producto.map((producto) => {
              { return <CardProductoDetalle producto={producto} key={producto.id} />; }
            })
            : null}
        </div>
      )}
    </div>

  );
};

export default DetailPage; 