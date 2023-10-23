import "./App.css";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Home from "./pages/home/Homepage";

function App() {
  return (
    <Box>
      <Navbar />
      <Home />
    </Box>
  );
}

export default App;
