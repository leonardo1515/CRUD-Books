import React, { useState, useEffect } from "react";
import "./style.css";
import StyledApp from "../components/StyledApp";
import { Livro } from "../components/types";
import Tabela from "../components/Tabela/Tabela";
import GetLocalStorage from "../components/Atualizar/Atualizar";
import { Box } from "@mui/system";

const Home: React.FC = () => {
  const [data, setData] = useState<Livro[]>([]);

  useEffect(() => {
    const livros = GetLocalStorage();
    setData(livros);
  }, []);

  return (
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
        <Tabela booksData={data} />
      </Box>
    </StyledApp>
  );
};
export default Home;
