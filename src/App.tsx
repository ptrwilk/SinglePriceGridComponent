import { ThemeProvider, createTheme } from "@mui/material";
import "./styles.css";
import SinglePriceGridComponent from "./Components/SinglePriceGridComponent";

const theme = createTheme({
  typography: {
    body1: {
      fontSize: 16,
    },
    fontFamily: "Karla",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <SinglePriceGridComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
