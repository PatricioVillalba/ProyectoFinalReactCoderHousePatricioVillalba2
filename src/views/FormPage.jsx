import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, AlertTitle } from "@mui/material";
import { CartContext } from "../contexts/CartContext ";
import { useContext, useEffect } from "react";
import { addDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import Stack from '@mui/material/Stack';
import Alerta from "../components/Alerta/Alerta";
import Spinner from "../components/Spinner/Spiner"

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [emailVerificado, setEmailVerificado] = useState("");
  const [nombreError, setNombreError] = useState(false);
  const [apellidoError, setApellidoError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailverificadoError, setEmailVerificadoError] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  // const [showAlert, setShowAlert] = useState(false);
  const { cartItems, setCartItems } = useContext(CartContext);
  const [purchaseID, setPurchaseID] = useState(null);
  const buttonClassName = isButtonDisabled ? "button-disabled" : "button-enabled";
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulación de carga de contenido
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const isValidEmail = (email) => {
    if (email === "") {
      return true; // Permitir campo vacío
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Verificar si todos los campos están completos
  const areAllInputsFilled =
    nombre !== "" &&
    apellido !== "" &&
    email !== "" &&
    emailVerificado !== "" &&
    emailVerificado === email &&
    isValidEmail(email);

  if (email !== "" && emailVerificado !== "" && emailVerificado !== email) {
    // setShowAlert(true);
  }
  // Actualizar el estado del botón según si todos los campos están completos o no
  React.useEffect(() => {
    setIsButtonDisabled(!areAllInputsFilled);
  }, [areAllInputsFilled]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let total = 0;
    total = cartItems.reduce((accumulator, currentItem) => {
      return accumulator + (currentItem.precio * currentItem.cantidad);
    }, 0);

    cartItems.map((item) => {
      let documentoId = item.id;
      // let documentoRef = db.collection('productos').doc(documentoId);
      const nuevoStock = item.stock - item.cantidad;
    });

    // Validar los campos o realizar otras acciones
    // console.log("Formulario enviado");
    // console.log("Nombre:", nombre);
    // console.log("Apellido:", apellido);
    // console.log("Email:", email);
    // console.log("Verificación de Email:", emailVerificado);
    // console.log("Productos:", cartItems);
    // console.log("Total:", total);
    const docRef = await addDoc(collection(db, "compras"), {
      Productos: cartItems,
      Total: total,
      Email: email,
      Nombre: nombre,
      Apellido: apellido,
    });

    setPurchaseID(docRef.id);
    setCartItems([]);
  };

  const handleChange = (event, setValue, setError) => {
    const value = event.target.value;
    setValue(value);
    setError(value.trim() === "");
    return;
  };

  // export default function Formulario() {
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 2, width: "100ch" },
            }}
            noValidate
            autoComplete="on"
            onSubmit={handleSubmit}
          >
            <TextField
              id="nombre"
              label="nombre"
              variant="outlined"
              type="text"
              value={nombre}
              onChange={(event) => handleChange(event, setNombre, setNombreError)}
              error={nombreError}
              helperText={nombreError ? "El campo está vacío" : ""}
              sx={{
                "& .MuiInputBase-input": {
                  color: "#000000",
                },
                "& .MuiOutlinedInput-root": {
                  background: "#f0f0f0", // Fondo gris
                  "& fieldset": {
                    borderColor: "#ffcc00", // Color dorado en el borde
                  },
                  "&:hover fieldset": {
                    borderColor: "#ffcc00", // Color dorado en el borde al pasar el cursor
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#ffcc00", // Color dorado en el borde al enfocar
                  },
                },
              }}
            />
            <TextField
              id="apellido"
              label="apellido"
              variant="outlined"
              type="text"
              value={apellido}
              onChange={(event) => handleChange(event, setApellido, setApellidoError)}
              error={apellidoError}
              helperText={apellidoError ? "El campo está vacío" : ""}
              sx={{
                "& .MuiInputBase-input": {
                  color: "#000000",
                },
                "& .MuiOutlinedInput-root": {
                  background: "#f0f0f0", // Fondo gris
                  "& fieldset": {
                    borderColor: "#ffcc00", // Color dorado en el borde
                  },
                  "&:hover fieldset": {
                    borderColor: "#ffcc00", // Color dorado en el borde al pasar el cursor
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#ffcc00", // Color dorado en el borde al enfocar
                  },
                },
              }}
            />
            <TextField
              id="email"
              label="email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(event) => handleChange(event, setEmail, setEmailError)}
              error={!isValidEmail(email)}
              helperText={
                isValidEmail(email) ? "" : "Ingrese un correo electrónico válido"
              }
              required
              sx={{
                "& .MuiInputBase-input": {
                  color: "#000000",
                },
                "& .MuiOutlinedInput-root": {
                  background: "#f0f0f0", // Fondo gris
                  "& fieldset": {
                    borderColor: "#ffcc00", // Color dorado en el borde
                  },
                  "&:hover fieldset": {
                    borderColor: "#ffcc00", // Color dorado en el borde al pasar el cursor
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#ffcc00", // Color dorado en el borde al enfocar
                  },
                },
              }}
            />
            <TextField
              id="emailVerificado"
              label="email"
              variant="outlined"
              type="email"
              value={emailVerificado}
              onChange={(event) =>
                handleChange(event, setEmailVerificado, setEmailVerificadoError)
              }
              required
              error={!isValidEmail(emailVerificado)}
              helperText={
                isValidEmail(emailVerificado)
                  ? ""
                  : "Ingrese un correo electrónico válido"
              }
              InputProps={{
                endAdornment: (
                  <small>Los mails deben coincidir</small>
                )
              }}
              sx={{
                "& .MuiInputBase-input": {
                  color: "#000000",
                },
                "& .MuiOutlinedInput-root": {
                  background: "#f0f0f0", // Fondo gris
                  "& fieldset": {
                    borderColor: "#ffcc00", // Color dorado en el borde
                  },
                  "&:hover fieldset": {
                    borderColor: "#ffcc00", // Color dorado en el borde al pasar el cursor
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#ffcc00", // Color dorado en el borde al enfocar
                  },
                },
              }}
            />
            <button type="submit" disabled={isButtonDisabled} className={buttonClassName}>
              {isButtonDisabled ? "Enviar (Debes Completar todos los campos para enviar)" : "Enviar"}
            </button>
            {purchaseID && <Alerta purchaseID={purchaseID}></Alerta>}
          </Box>
        </div>
      )}
    </div>

  );
};

export default Formulario;
