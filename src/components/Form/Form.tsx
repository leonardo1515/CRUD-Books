import "./style.css";
import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { FormType, Livro } from "../types";
import TransitionAlerts from "../Alerts/Alert";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Form: React.FC<FormType> = ({ booksData }) => {
  const [openAlert, setOpenAlert] = useState(false);
  const [titulo, setTitulo] = useState<string>("");
  const [autor, setAutor] = useState<string>("");
  const [publicacao, setPublicacao] = useState<any>("");
  const [cadastro, setCadastro] = useState<any>("");
  const [genero, setGnero] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  let [data, setData] = useState<Livro[]>([]);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const showAlert = () => setOpenAlert(true);
  const closeAlert = () => setOpenAlert(false);

  useEffect(() => {
    data = booksData;
  }, [booksData]);

  function test() {
    showAlert();
  }

  const addLivro = useCallback(() => {
    const livro = {
      id: Math.floor(Date.now() / 1000),
      titulo: titulo,
      autor: autor,
      publicacao: publicacao,
      cadastro: cadastro,
      genero: genero,
      descricao: descricao,
    };

    data.push(livro);
    localStorage.setItem("livro", JSON.stringify(data));

    handleClose();
  }, [autor, cadastro, data, descricao, genero, publicacao, titulo]);

  const deletLivro = useCallback(
    (id: number) => {
      let book = data.findIndex((item) => item.id === id);
      if (book >= 0) {
        data.splice(book, 1);
      }

      localStorage.setItem("task", JSON.stringify(data));

      alert("Nota excluida com sucesso.");
    },
    [data]
  );

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Titulo"
            value={titulo || ""}
            variant="outlined"
            onChange={(e) => setTitulo(e.target.value)}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Autor"
            value={autor || ""}
            variant="outlined"
            onChange={(e) => setAutor(e.target.value)}
          />
          <p>Publicação</p>
          <TextField
            fullWidth
            id="outlined-basic"
            type="date"
            value={publicacao || ""}
            variant="outlined"
            onChange={(e) => setPublicacao(e.target.value)}
          />
          <p>Cadastro</p>
          <TextField
            fullWidth
            id="outlined-basic"
            type="date"
            value={cadastro || ""}
            variant="outlined"
            onChange={(e) => setCadastro(e.target.value)}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Gênero"
            value={genero || ""}
            variant="outlined"
            onChange={(e) => setGnero(e.target.value)}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Descrição"
            value={descricao || ""}
            variant="outlined"
            onChange={(e) => setDescricao(e.target.value)}
          />

          <Button variant="contained" onClick={test}>
            Contained
          </Button>
          <TransitionAlerts
            message="deu errado"
            title="Error"
            type="info"
            open={openAlert}
            actionClose={closeAlert}
          ></TransitionAlerts>
        </Box>
      </Modal>
    </div>
  );
};

export default Form;
