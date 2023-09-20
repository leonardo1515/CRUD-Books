import React, { useCallback, useState, useEffect } from "react";
import {
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
import EditIcon from "@mui/icons-material/Edit";
import { Livro, TabelaType } from "../types";
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
    // const livros = GetLocalStorage();
    const i = GetLocalStorage();
    console.log(i);
    setData(i);
  }, [load]);

  // useEffect(() => {
  //   GetLocalStorage();

  //   setData(book);
  // }, [book]);

  const deletLivro = useCallback(
    (id: number) => {
      let book = data.findIndex((item) => item.id === id);
      if (book >= 0) {
        data.splice(book, 1);
      }

      localStorage.setItem("livro", JSON.stringify(data));
    },
    [data]
  );

  return (
    <>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Form
                    handleClose={handleClose}
                    handleOpen={handleOpen}
                    open={open}
                  />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableHead>
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
            </TableHead>
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
                          {/* <DeleteIcon
                            onClick={() => deletLivro(item.id)}
                            sx={{
                              marginRight: "40px",
                              marginLeft: "25px",
                              cursor: "pointer",
                            }}
                          /> */}
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
    </>
  );
};

export default Tabela;

// {booksData.map(
//     (item: {
//       id: number;
//       titulo: string;
//       autor: string;
//       publicacao: any;
//       cadastro: any;
//       genero: string;
//       descricao: string;
//     }) => {
//       return (
//         <TableRow
//           key={item.id}
//           sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//         >
//           <TableCell> {item.titulo} </TableCell>
//           <TableCell>{item.autor}</TableCell>
//           <TableCell>{item.genero}</TableCell>
//           <TableCell className="hiden-cell">
//             {item.publicacao}
//           </TableCell>
//           <TableCell className="hiden-cell">
//             {item.cadastro}
//           </TableCell>
//           <TableCell className="hiden-cell">
//             {item.descricao}
//           </TableCell>
//           <TableCell
//             sx={{
//               display: "flex",
//               justifyContent: "end",
//             }}
//           >
//             {/* <ModalDefalt
//               id={item.id}
//               messagEdit={item.messag}
//               descriptEdit={item.descript}
//             /> */}

//             <DeleteIcon
//               //   onClick={() => delet(item.id)}
//               sx={{ marginRight: "40px", marginLeft: "25px" }}
//             />
//           </TableCell>
//         </TableRow>
//       );
//     }
//   )}
