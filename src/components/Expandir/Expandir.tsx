import * as React from "react";
import { useState, useCallback } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField, Typography } from "@mui/material";
import { ExpandirType, Livro } from "../types";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import GetLocalStorage, { books, upLoad } from "../Atualizar/Atualizar";
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

const Expandir: React.FC<ExpandirType> = ({ idLivro }) => {
  let [message, setMessage] = useState<string>("teste");
  let [title, setTitle] = useState<string>("teste");
  let [type, setType] = useState<"error" | "warning" | "info" | "success" | "">(
    "success"
  );
  const [titulo, setTitulo] = useState<string>("");
  const [autor, setAutor] = useState<string>("");
  const [publicacao, setPublicacao] = useState<any>("");
  const [cadastro, setCadastro] = useState<any>("");
  const [genero, setGnero] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [openAlert, setOpenAlert] = useState(false);
  const [open, setExOpen] = React.useState(false);
  const expandirClose = () => setExOpen(false);
  let livro = books;
  let [allBooks, setAllBooks] = useState<Livro[]>([]);
  let [data, setData] = useState<Livro[]>([]);

  const expandirOpen = () => {
    getLivro(idLivro);
    setExOpen(true);
  };
  // const expandirOpen = () => setExOpen(true);

  const showAlert = () => setOpenAlert(true);
  const closeAlert = () => setOpenAlert(false);

  const getLivro = useCallback(
    (id: number) => {
      let book = livro.findIndex((item) => item.id === id);
      if (book >= 0) {
        const curret = livro.splice(book, 1);
        setData(curret);
      }
    },
    [livro]
  );

  const deletLivro = useCallback((id: number) => {
    const livros = GetLocalStorage();
    allBooks = livros;

    let book = allBooks.findIndex((item) => item.id === id);
    if (book >= 0) {
      allBooks.splice(book, 1);
    }

    localStorage.setItem("livro", JSON.stringify(allBooks));
    window.location.reload();
    upLoad();
    expandirClose();
  }, []);

  const updateLivro = useCallback(
    (id: number) => {
      const livros = GetLocalStorage();
      allBooks = livros;

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
        setMessage("O campo Publiblico é obrigatório");
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
        setMessage("O campo Genero é obrigatório");
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

      let book = allBooks.findIndex((item) => item.id === id);
      if (book >= 0) {
        allBooks[book].id = id;
        allBooks[book].titulo = titulo;
        allBooks[book].autor = autor;
        allBooks[book].publicacao = publicacao;
        allBooks[book].cadastro = cadastro;
        allBooks[book].genero = genero;
        allBooks[book].descricao = descricao;
      }

      localStorage.setItem("livro", JSON.stringify(allBooks));
      window.location.reload();
      upLoad();
      expandirClose();
    },
    [autor, cadastro, descricao, genero, publicacao, titulo]
  );

  return (
    <>
      <Button onClick={expandirOpen}>Expandir</Button>
      <Modal
        open={open}
        onClose={expandirClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {data.map((item: Livro) => {
            return (
              <div key={item.id}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Titulo"
                  value={titulo || item.titulo}
                  variant="outlined"
                  onChange={(e) => setTitulo(e.target.value)}
                />
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Autor"
                  value={autor || item.autor}
                  variant="outlined"
                  onChange={(e) => setAutor(e.target.value)}
                />
                <p>Publicação</p>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  type="date"
                  value={publicacao || item.publicacao}
                  variant="outlined"
                  onChange={(e) => setPublicacao(e.target.value)}
                />
                <p>Cadastro</p>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  type="date"
                  value={cadastro || item.cadastro}
                  variant="outlined"
                  onChange={(e) => setCadastro(e.target.value)}
                />
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Gênero"
                  value={genero || item.genero}
                  variant="outlined"
                  onChange={(e) => setGnero(e.target.value)}
                />
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Descrição"
                  value={descricao || item.descricao}
                  variant="outlined"
                  onChange={(e) => setDescricao(e.target.value)}
                />
                <Typography>
                  <DeleteIcon
                    onClick={() => deletLivro(item.id)}
                    sx={{
                      marginRight: "40px",
                      marginLeft: "25px",
                      cursor: "pointer",
                    }}
                  />
                </Typography>
                <Typography>
                  <EditIcon
                    onClick={() => updateLivro(item.id)}
                    sx={{
                      marginRight: "40px",
                      marginLeft: "25px",
                      cursor: "pointer",
                    }}
                  />
                </Typography>
              </div>
            );
          })}
          <TransitionAlerts
            message={message}
            title={title}
            type={type}
            open={openAlert}
            actionClose={closeAlert}
          ></TransitionAlerts>
        </Box>
      </Modal>
    </>
  );
};

export default Expandir;
