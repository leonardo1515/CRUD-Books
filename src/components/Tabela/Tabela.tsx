import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import "./style.css";
import { Livro } from "../types";
import GetLocalStorage, { books, load } from "../Atualizar/Atualizar";
import Form from "../Form/Form";
import Expandir from "../Expandir/Expandir";
import Filtro from "../Filtro/Filtro";

const Tabela: React.FC = () => {
  let reload = load;
  let book = books;
  const [data, setData] = useState<Livro[]>([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [tituloFiltro, setTituloFiltro] = useState<string>("");

  useEffect(() => {
    const i = GetLocalStorage();

    setData(i);
  }, [load]);

  return (
    <Box>
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
        <TextField
          sx={{ backgroundColor: "rgba(111, 109, 110, 0.4)", fontSize: "20px" }}
          fullWidth
          id="outlined-basic"
          label="Buscar por título"
          margin="normal"
          value={tituloFiltro}
          variant="outlined"
          onChange={(e) => setTituloFiltro(e.target.value)}
        />
        <Box
          sx={{
            height: "55px",
            backgroundColor: "rgba(111, 109, 110, 0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "7px",
            marginRight: "20px",
            WebkitBorderBottomRightRadius: "5px",
            WebkitBorderTopRightRadius: "5px",
          }}
        >
          <Filtro tituloFiltro={tituloFiltro}></Filtro>
        </Box>
        <Button
          onClick={() => setTituloFiltro("")}
          sx={{ backgroundColor: "rgba(111, 109, 110, 0.4)" }}
        >
          Limpar
        </Button>
      </Typography>
      <Box
        sx={{
          marginLeft: "60px",
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
                  </TableCell>
                </TableRow>
              </TableHead>
              <div style={{ height: "300px", overflow: "auto" }}>
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
                          <TableCell sx={{ fontSize: "20px" }}>
                            {" "}
                            {item.titulo}{" "}
                          </TableCell>
                          <TableCell sx={{ fontSize: "20px" }}>
                            {item.autor}
                          </TableCell>
                          <TableCell sx={{ fontSize: "20px" }}>
                            {item.genero}
                          </TableCell>
                          <TableCell>
                            <Expandir idLivro={item.id} />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableCell>
                </TableBody>
              </div>
            </Table>
          </TableContainer>
        </Grid>
      </Box>
    </Box>
  );
};

export default Tabela;
