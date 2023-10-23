import "./App.css";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Home from "./pages/home/Homepage";
import Invoice from "./pages/invoice/Invoice";
import DashboardEO from "./pages/dashboard/DashboardEO";
import DashboardUser from "./pages/dashboard/DashboardUser";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Box>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/eo' element={<DashboardEO/>}/>
        <Route path = '/user' element={<DashboardUser/>}/>
        <Route path = '/invoice' element={<Invoice/>}/>
      </Routes>
    </Box>
  );
}

export default App;
