import React, { useState, useEffect } from "react";
import "./style.css";
import StyledApp from "../components/StyledApp";
import Form from "../components/Form/Form";
import { Livro } from "../components/types";

const Home: React.FC = () => {
  const [data, setData] = useState<Livro[]>([]);

  useEffect(() => {
    const getLocalStorage = localStorage.getItem("livros") as string;
    if (
      !getLocalStorage ||
      getLocalStorage === "" ||
      getLocalStorage === null
    ) {
      localStorageDefalut();
    }
    const livros = JSON.parse(getLocalStorage);
    setData(livros);
  }, []);

  function localStorageDefalut() {
    setData([]);
  }

  return (
    <StyledApp mode="dark">
      <Form booksData={data}></Form>
      {/* <div className="headBg"><p>Minha primeira pagina com react</p></div>

<nav className="navg">
  <DivBtnProps mode="dark">
    <MonitorIcon/>
    <BtnNav text="Sincrovizar"></BtnNav>
  </DivBtnProps>

  <DivBtnProps mode="dark">
    <MonitorIcon/>
    <BtnNav text="Sincrovizar"></BtnNav>
  </DivBtnProps>

  <DivBtnProps mode="dark">
    <MonitorIcon/>
    <BtnNav text="Sincrovizar"></BtnNav>
  </DivBtnProps>
</nav>

<main>

  <ContenteMain
    text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tenetur suscipit sit et porro? Vero, dolore ex placeat 
            consequatur dolorum libero! Nihil ab quisquam, repellendus 
            voluptatum numquam omnis sapiente placeat deserunt?`}
    sorc={"/images/logo192.png"}
  ></ContenteMain>

  <ContenteMain
    text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tenetur suscipit sit et porro? Vero, dolore ex placeat 
            consequatur dolorum libero! Nihil ab quisquam, repellendus 
            voluptatum numquam omnis sapiente placeat deserunt?`}
    sorc={"/images/logo192.png"}
  ></ContenteMain>

  <ContenteMain
    text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tenetur suscipit sit et porro? Vero, dolore ex placeat 
            consequatur dolorum libero! Nihil ab quisquam, repellendus 
            voluptatum numquam omnis sapiente placeat deserunt?`}
    sorc={"/images/logo192.png"}
  ></ContenteMain>

</main>
<footer className="foot">
  <p>Contato</p>
</footer> */}
    </StyledApp>
  );
};
export default Home;
