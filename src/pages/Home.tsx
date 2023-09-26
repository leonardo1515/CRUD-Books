import React from "react";
import "./style.css";
import StyledApp from "../components/StyledApp";
import Tabela from "../components/Tabela/Tabela";
import { Box } from "@mui/system";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Home: React.FC = () => {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <StyledApp mode="dark">
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            "url(https://i.pinimg.com/originals/ee/c3/dd/eec3ddcd9443ab529b3c2e32393ac0d9.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      > 
        <Tabela />
      </Box>
    </StyledApp>
    </LocalizationProvider>
  );
};
export default Home;
