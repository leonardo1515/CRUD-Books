import { Livro } from "../types";
export let load = 0;

export let books = [] as Livro[];

export function upLoad() {
  load++;
}

const GetLocalStorage = (): Livro[] | [] => {
  const getLocalStorage = localStorage.getItem("livro") as string;

  if (!getLocalStorage || getLocalStorage === "" || getLocalStorage === null) {
    books = [];
    return [];
  } else {
    const storage = JSON.parse(getLocalStorage);
    books = storage;
    return storage;
  }
};

export default GetLocalStorage;
