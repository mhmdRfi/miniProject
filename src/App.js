
import './App.css';
import { Box } from '@chakra-ui/react';
import Navbar from './components/navbar/Navbar';
import Invoice from './pages/invoice/Invoice';
import Footer from './components/footer/Footer';
import NavbarBottom from './components/navbarBottom/NavbarBottom';
import SidebarWithHeader from './pages/dashboard/SidebarDashboard';
import Dashboard from './pages/dashboard/Dashboard';
import DashboardEO from './pages/dashboard/DashboardEO';
function App() {
  return (
    <Box>
      <SidebarWithHeader/>
      <DashboardEO/>
    </Box>
  );
}

export default App;
