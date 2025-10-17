import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Papelaria from './assets/Papelaria';
import Artevisual from './assets/Artevisual';
import Grafica from './assets/Grafica';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
    return (
        <>
       
        <BrowserRouter>
          
        <NavBar />
    
          
          <Routes>
            <Route path="/Grafica" element={<Grafica />} />
            <Route path="/Papelaria" element={<Papelaria />} />
            <Route path="/Artevisual" element={<Artevisual />} />
          </Routes>
        </BrowserRouter>
        </>
      )
}
export default App