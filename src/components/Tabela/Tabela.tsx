import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "./style.css";
import { Livro, TabelaType } from "../types";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import GetLocalStorage, { books, load } from "../Atualizar/Atualizar";
import Form from "../Form/Form";
import Expandir from "../Expandir/Expandir";

const Tabela: React.FC<TabelaType> = ({ booksData }) => {
  let reload = load;
  let book = books;
  const [data, setData] = useState<Livro[]>([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const i = GetLocalStorage();

    setData(i);
  }, [load]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "70%",
        height: "50%",
      }}
    >
      <Grid sx={{ marginTop: "50px" }} item xs={12}>
        <TableContainer
          component={Paper}
          sx={{
            maxWidth: "700px",
            backgroundColor: "rgba(111, 109, 110, 0.4)",
          }}
        >
          <Table aria-label="simple table" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Form
                    handleClose={handleClose}
                    handleOpen={handleOpen}
                    open={open}
                  />
                  <AutoStoriesIcon />
                </TableCell>
              </TableRow>
            </TableHead>
            {/* <TableHead>
              <TableRow>
               <TableCell sx={{ fontSize: "16px", width: "20px" }}>
                  Titulo
                </TableCell>
                <TableCell sx={{ fontSize: "16px" }}>Autor</TableCell>
                <TableCell sx={{ fontSize: "16px" }}>Genero</TableCell>
                <TableCell sx={{ fontSize: "16px", display: "none" }}>
                  DT.Publicação
                </TableCell>
                <TableCell sx={{ fontSize: "16px", display: "none" }}>
                  DT.Cadastro
                </TableCell>
                <TableCell sx={{ fontSize: "16px", display: "none" }}>
                  Descrição
                </TableCell>
              </TableRow>
            </TableHead> */}
            <TableBody>
              <TableCell>
                {data.map(
                  (item: {
                    id: number;
                    titulo: string;
                    autor: string;
                    publicacao: any;
                    cadastro: any;
                    genero: string;
                    descricao: string;
                  }) => {
                    return (
                      <TableRow
                        key={item.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell> {item.titulo} </TableCell>
                        <TableCell>{item.autor}</TableCell>
                        <TableCell>{item.genero}</TableCell>
                        <TableCell sx={{ display: "none" }}>
                          {item.publicacao}
                        </TableCell>
                        <TableCell sx={{ display: "none" }}>
                          {item.cadastro}
                        </TableCell>
                        <TableCell sx={{ display: "none" }}>
                          {item.descricao}
                        </TableCell>
                        <TableCell>
                          <Expandir idLivro={item.id} />
                        </TableCell>
                      </TableRow>
                    );
                  }
                )}
              </TableCell>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Box>
  );
};

export default Tabela;
