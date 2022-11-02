import styled from "styled-components";

interface StyledDivBtnProps {
    mode: "dark" | "light";
  }

const DivBtnProps = styled.div<StyledDivBtnProps> `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
    background-color:${(props) => props.theme.primary[props.mode]};
`



export default DivBtnProps