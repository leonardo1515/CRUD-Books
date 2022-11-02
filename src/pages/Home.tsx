import React from "react";
import { Link } from "react-router-dom";
import "./style.css" 
import ContenteMain from "../components/Content/Contente";
import BtnNav from "../components/btnNav/BtnNav";
import StyledApp from "../components/StyledApp";

import MonitorIcon from '@mui/icons-material/Monitor';
import DivBtnProps from "../components/btnNav/StyledDivBtn";


const Home: React.FC = () => (
  <StyledApp mode="dark">
    <div className="headBg"><p>Minha primeira pagina com react</p></div>

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
    </footer>
  </StyledApp>

);
export default Home;