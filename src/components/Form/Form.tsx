import "./style.css";
import * as React from "react";
import { useState, useCallback } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { FormType, Livro } from "../types";
import TransitionAlerts from "../Alerts/Alert";
import GetLocalStorage, { upLoad } from "../Atualizar/Atualizar";

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

const Form: React.FC<FormType> = ({ handleClose, handleOpen, open }) => {
  const [openAlert, setOpenAlert] = useState(false);
  const [titulo, setTitulo] = useState<string>("");
  const [autor, setAutor] = useState<string>("");
  const [publicacao, setPublicacao] = useState<any>("");
  const [cadastro, setCadastro] = useState<any>("");
  const [genero, setGnero] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  let [data, setData] = useState<Livro[]>([]);
  let [message, setMessage] = useState<string>("teste");
  let [title, setTitle] = useState<string>("teste");
  let [type, setType] = useState<"error" | "warning" | "info" | "success" | "">(
    "success"
  );

  const showAlert = () => setOpenAlert(true);
  const closeAlert = () => setOpenAlert(false);

  const addLivro = () => {
    const livros = GetLocalStorage();
    data = livros;

    const livro = {
      id: Math.floor(Date.now() / 1000),
      titulo: titulo,
      autor: autor,
      publicacao: publicacao,
      cadastro: cadastro,
      genero: genero,
      descricao: descricao,
    };

    if (titulo === "") {
      setTitle("ERROR");
      setMessage("O campo Titulo é obrigatório");
      setType("error");
      showAlert();
      return;
    }

    if (autor === "") {
      setTitle("ERROR");
      setMessage("O campo Autor é obrigatório");
      setType("error");
      showAlert();
      return;
    }

    if (publicacao === "") {
      setTitle("ERROR");
      setMessage("O campo Publicação é obrigatório");
      setType("error");
      showAlert();
      return;
    }

    if (cadastro === "") {
      setTitle("ERROR");
      setMessage("O campo cadastro é obrigatório");
      setType("error");
      showAlert();
      return;
    }

    if (genero === "") {
      setTitle("ERROR");
      setMessage("O campo Gênero é obrigatório");
      setType("error");
      showAlert();
      return;
    }

    if (descricao === "") {
      setTitle("ERROR");
      setMessage("O campo Descrição é obrigatório");
      setType("error");
      showAlert();
      return;
    } data.push(livro);
      localStorage.setItem("livro", JSON.stringify(data));
  
      upLoad();
      handleClose();
    };

  return (
    <div>
      <Button onClick={handleOpen} sx={{ backgroundColor: "rgba(111, 109, 110, 0.4)" }}>Novo Livro</Button>
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
            label="Titulo" margin="normal"
            value={titulo || ""}
            variant="outlined"
            onChange={(e) => setTitulo(e.target.value)}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Autor" margin="normal"
            value={autor || ""}
            variant="outlined"
            onChange={(e) => setAutor(e.target.value)}
          />
          <p>Data de publicação</p>
          <TextField
            fullWidth
            id="outlined-basic"
            type="date" margin="normal"
            value={publicacao || ""}
            variant="outlined"
            onChange={(e) => setPublicacao(e.target.value)}
          />
          <p>Data de cadastro</p>
          <TextField
            fullWidth
            id="outlined-basic"
            type="date" margin="normal"
            value={cadastro || ""}
            variant="outlined"
            onChange={(e) => setCadastro(e.target.value)}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Gênero" margin="normal"
            value={genero || ""}
            variant="outlined"
            onChange={(e) => setGnero(e.target.value)}
          />
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="Descrição" margin="normal"
            value={descricao || ""}
            multiline
            rows={4}
            onChange={(e) => setDescricao(e.target.value)}
          />
          <Button variant="contained" onClick={addLivro}>
            Adicionar
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "red", marginLeft: "105px"}}
            onClick={handleClose}>
            Cancelar
          </Button>
          <TransitionAlerts
            message={message}
            title={title}
            type={type}
            open={openAlert}
            actionClose={closeAlert}
          ></TransitionAlerts>
        </Box>
      </Modal>
    </div>
  );
};

export default Form;
