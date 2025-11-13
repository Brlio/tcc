import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Papelaria from './assets/Papelaria';
import Artevisual from './assets/Artevisual';
import Grafica from './assets/Grafica';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Home from './assets/Home';


function App() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="/src/fundo.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Grafica" element={<Grafica />} />
          <Route path="/Papelaria" element={<Papelaria />} />
          <Route path="/Artevisual" element={<Artevisual />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;