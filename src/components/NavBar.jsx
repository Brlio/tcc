import { Link, NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav style={{backgroundColor: "#B30021"}} class="navbar navbar-expand-lg " >
            <div class="container-fluid">
                <a style={{color: "white"}} class="navbar-brand" href="/"><img
    src="/src/logo.png"
    
    style={{
      height: "90px",
      objectFit: "contain",
    }}
  /></a>
                <button style={{backgroundColor: "white", color: "transparent"}}  class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span style={{backgroundColor: "white"}} class="navbar-toggler-icon"></span>
                </button>
                <div  class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a style={{color: "#FFFFFF", fontWeight: "600"}} class="nav-link" href="/Artevisual">Arte Visual</a>
                        <a style={{color: "#FFFFFF", fontWeight: "600"}} class="nav-link" href="/Grafica">Grafica</a>
                        <a style={{color: "#FFFFFF", fontWeight: "600"}} class="nav-link" href="/Papelaria">Papelaria</a>
                        <a style={{color: "#FFFFFF", fontWeight: "600"}} class="nav-link" href="https://www.papelarialion.com.br/">E-commerce</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar