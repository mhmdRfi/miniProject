
import './App.css';
import { Box } from '@chakra-ui/react';
// import PesanEvent from './pages/event/PesanEvent';
import Invoice from "./pages/invoice/Invoice";
import DashboardEO from "./pages/dashboard/DashboardEO";
import DashboardUser from "./pages/dashboard/DashboardUser";
import Search from "./pages/search/Search";
import Login from './pages/login/Login'
import Register from './pages/registration/Registration'
import EventDescription from './pages/eventDescription/EventDescription'
import EventDescription2 from './pages/eventDescription/EventDescription2'
import Home from './pages/home/Homepage'
import Navbar from './components/navbar/Navbar'
import NavbarBottom from './components/Navbar Bottom/NavbarBottom'
import Footer from './components/footer/Footer'
import DetailPemesanan from './pages/detailPemesanan/DetailPemesanan'
import BuatEvent from "./pages/buatEvent/BuatEvent";
import ConfirmationPage from "./pages/confirmationPage/ConfirmationPage";
import { Routes, Route } from 'react-router-dom'
import Auth from "./components/Auth/Auth";



function App() {
  return (
    <Box>
      <Auth>
      <Navbar />
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/detail-event' element = {<EventDescription2 />} />
        <Route path = '/detail-event/detail-pembayaran' element = {<DetailPemesanan />} />
        <Route path = '/login' element = {<Login />} />
        <Route path = '/register' element = {<Register />} />
        <Route path="/search" element={<Search />} />
        <Route path="/eo" element={<DashboardEO />} />
        <Route path="/user" element={<DashboardUser />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/buat-event" element={<BuatEvent />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
      <NavbarBottom />
      <Footer />
      </Auth>
    </Box>
  );
}

export default App;
