import './App.css';
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import WelcomePage from './Components/WelcomePage';
import Info from './Components/Info';
import CurrencyInput from './Components/CurrencyInput';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<WelcomePage />} />
        <Route path={'/CurrencyInput'} element={<CurrencyInput />} />
        <Route path={'/Info'} element={<Info />} />
      </Routes>
    </>
  );
}

export default App;
