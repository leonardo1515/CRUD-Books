import  React  from "react";
import ButtonDefaut from "../ButtonDefault/ButtonDefaut";
import { DivFormStyled,FormStyled } from "./FormStyled";

import "./style.css"
interface FormProps  {
    email:string,
    senha:string,
    button:string
}

const Form: React.FC = () => {
    return (
    <DivFormStyled>
        <FormStyled>
        <form >
            <label htmlFor="email">Email:</label>
            <input type="email" className="PadingInput" name="" id="email" /><br />
            <label htmlFor="senha">Senha:</label>
            <input type="password" className="PadingInput" name="" id="senha" /><br />
            <ButtonDefaut label={"Entrar"}/>
        </form>
        </FormStyled>
    </DivFormStyled>

)
    
}

export default Form