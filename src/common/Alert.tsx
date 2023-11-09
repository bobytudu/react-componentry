import React from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

export interface AlertPropsTypes {
  anchorOrigin?: {
    vertical: "top" | "bottom";
    horizontal: "left" | "center" | "right";
  };
  closeSnack: () => void;
  state: {
    open: boolean;
    type: "success" | "error";
    message: string;
  };
}

function AlertComponent({ state, closeSnack, anchorOrigin }: AlertPropsTypes) {
  const { open, type, message } = state;
  const onClose = () => {
    closeSnack();
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
        ...anchorOrigin,
      }}
      open={open}
      autoHideDuration={5000}
      onClose={onClose}
    >
      <Alert
        variant="filled"
        severity={type === "success" ? "success" : "error"}
        sx={{ width: "100%" }}
        onClose={onClose}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default AlertComponent;
