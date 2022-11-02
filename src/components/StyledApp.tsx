import styled from "styled-components";

interface AppStyledProps {
  mode: "dark" | "light";
}

const StyledApp = styled.div<AppStyledProps>`
  background-color: ${(props) => props.theme.background[props.mode]};
  color: ${(props) => props.theme.color[props.mode]};
`;

export default StyledApp;
