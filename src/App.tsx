import React from "react";
import { ThemeProvider } from "styled-components";
import StyledApp from "./components/StyledApp";
import theme from "./config/theme/theme";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (

  
    <ThemeProvider theme={theme}>
      <div className="App">
        <StyledApp mode="dark">
          <AppRoutes />
        </StyledApp>
      </div>
    </ThemeProvider>
     


    );
}

export default App;
