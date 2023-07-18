import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Boton = ({ onClick, children, className }) => {
  return (
    <Stack direction="row" spacing={2}>
      {/* <Button variant="contained" onClick={onClick} size="small">
        {children}
      </Button> */}
    </Stack>
  );
};

export default Boton;
