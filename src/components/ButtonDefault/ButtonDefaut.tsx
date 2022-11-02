import React from "react";
import ButtonDefaultStyle from "./ButtonStyled"

interface ButonDefautProps {
    label: string;
}

const ButtonDefaut: React.FC<ButonDefautProps> =({label}) =>{
    return <ButtonDefaultStyle>{label}</ButtonDefaultStyle>
}

export default ButtonDefaut