import { Livro } from "./type.livros";

export interface TypeConfirmModal {
  id: number;
  livroCurret: Livro | undefined;
  typeConfirm: string;
  openConfirm: boolean;
  handleOpenConfirm: () => void;
  handleCloseConfirm: () => void;
}
