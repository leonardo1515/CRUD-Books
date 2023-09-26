import React, { useState } from "react";
import "./style.css";
import StyledApp from "../components/StyledApp";
import Tabela from "../components/Tabela/Tabela";
import { Box } from "@mui/system";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import GetLocalStorage from "../components/Atualizar/Atualizar";
import { Livro } from "../components/types";

const Home: React.FC = () => {
  const [resBusca, setResBusca] = useState<Livro[]>([]);
  const buscar = (autor:string) => {
   const resultado = GetLocalStorage();
   for (let i = 0; i < resultado.length; i++) {
    if (resultado[i].autor === autor) {
      resBusca.push(resultado[i]);
      console.log(resBusca)
    }
  }
  }

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
        <SearchIcon onClick={() => buscar("")}>
        </SearchIcon>
        <TextField label= "Buscar"> 
        </TextField>
        <Tabela />
      </Box>
    </StyledApp>
    </LocalizationProvider>
  );
};
export default Home;
