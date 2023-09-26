import * as React from "react";
import { useState, useCallback } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField, Typography } from "@mui/material";
import { ExpandirType, Livro } from "../types";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import GetLocalStorage, { books } from "../Atualizar/Atualizar";
import TransitionAlerts from "../Alerts/Alert";
import ConfirmeModal from "../ConfirmModal/Confirme.Modal";
import "./style.css";
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "3px solid #000",
  boxShadow: 24,
  p: 4,
};

const Expandir: React.FC<ExpandirType> = ({ idLivro }) => {
  const [typeConfirm, setTypeConfirm] = useState<string>("");
  let [message, setMessage] = useState<string>("teste");
  let [title, setTitle] = useState<string>("teste");
  let [type, setType] = useState<"error" | "warning" | "info" | "success" | "">(
    "success"
  );
  const [titulo, setTitulo] = useState<string>("");
  const [autor, setAutor] = useState<string>("");
  const [publicacao, setPublicacao] = useState("");
  const [cadastro, setCadastro] = useState("");
  const [genero, setGnero] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [openAlert, setOpenAlert] = useState(false);
  const [openConfirm, setConfirm] = React.useState(false);
  const [open, setExOpen] = React.useState(false);
  const expandirClose = () => setExOpen(false);
  const showAlert = () => setOpenAlert(true);
  const closeAlert = () => setOpenAlert(false);
  const handleOpenConfirm = () => setConfirm(true);
  const handleCloseConfirm = () => setConfirm(false);
  const [livroCurret, setLivroCurret] = useState<Livro>();
  let livro = books;

  const expandirOpen = () => {
    GetLocalStorage();
    getLivro(idLivro);
    setExOpen(true);
  };

  React.useEffect(() => {
    setTypeConfirm("");
  }, []);

  const getLivro = useCallback(
    (id: number) => {
      let book = livro.findIndex((item) => item.id === id);
      if (book >= 0) {
        const curret = livro.splice(book, 1);
        setTitulo(curret[0].titulo);
        setAutor(curret[0].autor);
        setPublicacao(curret[0].publicacao);
        setCadastro(curret[0].cadastro);
        setGnero(curret[0].genero);
        setDescricao(curret[0].descricao);
      }
    },
    [livro]
  );

  const deletLivro = useCallback(() => {
    setTypeConfirm("d");
    handleOpenConfirm();
  }, []);

  const updateLivro = useCallback(() => {
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
    }

    const livro: Livro = {
      id: Math.floor(Date.now() / 1000),
      titulo: titulo,
      autor: autor,
      publicacao: publicacao,
      cadastro: cadastro,
      genero: genero,
      descricao: descricao,
    };
    setLivroCurret(livro);
    setTypeConfirm("");
    handleOpenConfirm();
  }, [autor, cadastro, descricao, genero, publicacao, titulo]);

  return (
    <>
      <Button onClick={expandirOpen} sx={{ backgroundColor: "rgba(111, 109, 110, 0.4)"}}>Expandir</Button>
      <Modal
        open={open}
        onClose={expandirClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="borderDefault" sx={style}>
          <div>
            <CloseIcon onClick ={expandirClose} sx={{marginBottom:"5px", marginLeft:"300px"}}>
            </CloseIcon>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Titulo"
              margin="normal"
              value={titulo}
              variant="outlined"
              onChange={(e) => setTitulo(e.target.value)}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Autor"
              margin="normal"
              value={autor || ""}
              variant="outlined"
              onChange={(e) => setAutor(e.target.value)}
            />
            <p>Data de publicação</p>
            <TextField
              fullWidth
              type="date"
              id="outlined-basic"
              margin="normal"
              value={publicacao || ""}
              variant="outlined"
              onChange={(e) => setPublicacao(e.target.value)}
            />
            <p>Data de cadastro</p>
            <TextField
              fullWidth
              disabled
              id="outlined-basic"
              label="cadastro"
              margin="normal"
              value={cadastro || ""}
              variant="outlined"
              onChange={(e) => setCadastro(e.target.value)}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Gênero"
              margin="normal"
              value={genero || ""}
              variant="outlined"
              onChange={(e) => setGnero(e.target.value)}
            />
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Descrição"
              margin="normal"
              value={descricao || ""}
              multiline
              rows={4}
              onChange={(e) => setDescricao(e.target.value)}
            />
            <Typography>
              <DeleteIcon
                onClick={() => deletLivro()}
                sx={{
                  marginTop: "10px",
                  marginRight: "40px",
                  marginLeft: "25px",
                  marginBottom: "20px",
                  cursor: "pointer",
                }}
              />
              <EditIcon
                onClick={() => updateLivro()}
                sx={{
                  marginLeft: "190px",
                  marginBottom: "10px",
                  cursor: "pointer",
                }}
              />
            </Typography>
          </div>

          <TransitionAlerts
            message={message}
            title={title}
            type={type}
            open={openAlert}
            actionClose={closeAlert}
          />
          <ConfirmeModal
            id={idLivro}
            livroCurret={livroCurret}
            typeConfirm={typeConfirm}
            openConfirm={openConfirm}
            handleCloseConfirm={handleCloseConfirm}
          />
        </Box>
      </Modal>
    </>
  );
};

export default Expandir;
