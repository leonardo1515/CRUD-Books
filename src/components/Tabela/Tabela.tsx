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
import { Livro } from "../types";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import GetLocalStorage, { books, load } from "../Atualizar/Atualizar";
import Form from "../Form/Form";
import Expandir from "../Expandir/Expandir";

const Tabela: React.FC = () => {
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
                    backgroundColor: "rgba(111, 109, 110, 0.4)",
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
            <TableBody>
              <TableCell>
                {data.map((item: Livro) => {
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
                      <TableCell>
                        <Expandir idLivro={item.id} />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableCell>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Box>
  );
};

export default Tabela;