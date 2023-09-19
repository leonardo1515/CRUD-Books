import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { InterfaceAlerts } from "../types";
import Snackbar from "@mui/material/Snackbar";

const TransitionAlerts: React.FC<InterfaceAlerts> = ({
  type,
  title,
  message,
  open,
  actionClose,
}) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Snackbar open={open} autoHideDuration={3000} onClick={actionClose}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={actionClose}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          onClose={actionClose}
          severity={type ? type : "info"}
          sx={{ width: "100%" }}
        >
          <AlertTitle>{title}</AlertTitle>
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default TransitionAlerts;
