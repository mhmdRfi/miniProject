
import './App.css';
import { Box } from '@chakra-ui/react';
import Navbar from './components/navbar/Navbar';
import Invoice from './pages/invoice/Invoice';
import Footer from './components/footer/Footer';
import NavbarBottom from './components/navbarBottom/NavbarBottom';

function App() {
  return (
    <Box>
      <Navbar/>
      <Invoice/>
      <Footer/>
      <NavbarBottom/>
    </Box>
  );
}

export default App;
