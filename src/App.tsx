import { ThemeProvider } from "styled-components";
import { BrowserRouter} from "react-router-dom";
import { Router } from "./Router"

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/defaut";
import { ItemsContextProvider } from "./context/ItemsContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
        <ItemsContextProvider>
          <Router />
        </ItemsContextProvider>
        </BrowserRouter>
        <GlobalStyle />
    </ThemeProvider>
  )
}

