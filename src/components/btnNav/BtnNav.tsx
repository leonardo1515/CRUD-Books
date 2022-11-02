import React from "react";
import { Link } from "react-router-dom";
import StyledBtn from "./BtStyled";
import DivBtnProps from "./StyledDivBtn";
import MonitorIcon from '@mui/icons-material/Monitor';


interface BtnNavProps {
    text: string,
    
}

const BtnNav: React.FC<BtnNavProps> = ({text}) => {
    return (
        <>
            <StyledBtn><Link to={"/Home"}><h3>{text}</h3></Link></StyledBtn>
        </>
                     
    )
}

export default BtnNav
