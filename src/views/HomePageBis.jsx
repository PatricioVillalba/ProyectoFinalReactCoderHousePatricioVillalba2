// import { React,useContext,useState, useEffect } from "react";
// import { CartContext } from "../contexts/CartContext ";
// import { collection, query, where, getDocs } from "firebase/firestore";
// import { db } from "../firebase/firebaseConfig";
// import CardProducto2 from "../components/cardProducto/carProducto2";

// // deberia ser un componente y que lo llame desde app js
// const HomePageBis = () => {
//   const [productos, setProductos] = useState([]);

// // useEffect(() => {
// //   const getProductos = async () => {
// //     const q = query(collection(db, "productos"));
// //     const querySnapShot = await getDocs(q);
// //     const docs = [];
// //     querySnapShot.forEach((doc) => {
// //       console.log(doc.id," => ",doc.data());
// //       docs.push({ ...doc.data(), id: doc.id });
// //     });
// //     setProductos(docs);
// //     console.log(productos);
// //   };
// //   getProductos();
// // }, []);

//   return (
//     <div className="">
//       {/* <h1>HomePageBis</h1> */}
//       {/* <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
//         {productos
//           ? productos.map((producto) => {
//             {return  <CardProducto2 producto={producto} key={producto.id} />;}
//           })
//           : null}
//       </div> */}
//     </div>
//    );
//  };

// export default HomePageBis;

