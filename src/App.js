
import './App.css';
import { Box } from '@chakra-ui/react';
import Navbar from './components/navbar/Navbar';
import Invoice from './pages/invoice/Invoice';


function App() {
  return (
    <Box>
      <Navbar/>
      <Invoice/>
    </Box>
  );
}

export default App;
