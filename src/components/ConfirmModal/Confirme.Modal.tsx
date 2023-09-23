import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import GetLocalStorage, { upLoad } from "../Atualizar/Atualizar";
import { TypeConfirmModal } from "../types";

export let next = false;
export function setNext() {
  next = false;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const ConfirmeModal: React.FC<TypeConfirmModal> = ({
  id,
  livroCurret,
  typeConfirm,
  openConfirm,
  handleOpenConfirm,
  handleCloseConfirm,
}) => {
  const delet = React.useCallback((id: number) => {
    const allBooks = GetLocalStorage();
    // const livros = GetLocalStorage();
    // allBooks = livros;

    let book = allBooks.findIndex((item) => item.id === id);
    if (book >= 0) {
      allBooks.splice(book, 1);
    }

    localStorage.setItem("livro", JSON.stringify(allBooks));

    window.location.reload();
    upLoad();
  }, []);

  const update = React.useCallback(
    (id: number) => {
      const allBooks = GetLocalStorage();

      // const livros = GetLocalStorage();
      // allBooks = livros;

      let book = allBooks.findIndex((item) => item.id === id);
      if (book >= 0) {
        allBooks[book].id = id;
        allBooks[book].titulo = livroCurret!.titulo;
        allBooks[book].autor = livroCurret!.autor;
        allBooks[book].publicacao = livroCurret!.publicacao;
        allBooks[book].cadastro = livroCurret!.cadastro;
        allBooks[book].genero = livroCurret!.genero;
        allBooks[book].descricao = livroCurret!.descricao;
      }

      localStorage.setItem("livro", JSON.stringify(allBooks));
      window.location.reload();
      upLoad();
    },
    [livroCurret]
  );

  if (typeConfirm === "d") {
    return (
      <div>
        <Modal
          open={openConfirm}
          onClose={handleCloseConfirm}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 400 }}>
            <p>Tem certesa que quer DELETAR este livro ?</p>
            <Button variant="contained" onClick={() => delet(id)}>
              Comfirmar
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "red" }}
              onClick={handleCloseConfirm}
            >
              Cancelar
            </Button>
          </Box>
        </Modal>
      </div>
    );
  } else {
    return (
      <div>
        <Modal
          open={openConfirm}
          onClose={handleCloseConfirm}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 400 }}>
            <p>Tem certesa que quer EDITAR este livro ?</p>
            <Button variant="contained" onClick={() => update(id)}>
              Comfirmar
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "red" }}
              onClick={handleCloseConfirm}
            >
              Cancelar
            </Button>
          </Box>
        </Modal>
      </div>
    );
  }
};

export default ConfirmeModal;
