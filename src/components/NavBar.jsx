import { Link, NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav style={{backgroundColor: "#cc0000"}} class="navbar navbar-expand-lg " >
            <div class="container-fluid">
                <a style={{color: "white"}} class="navbar-brand" href="/">Navbar</a>
                <button style={{backgroundColor: "white"}} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span style={{backgroundColor: "white"}} class="navbar-toggler-icon"></span>
                </button>
                <div  class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a style={{color: "#f2f2f2"}} class="nav-link" href="/Artevisual">Arte Visual</a>
                        <a style={{color: "#f2f2f2"}} class="nav-link" href="/Grafica">Grafica</a>
                        <a style={{color: "#f2f2f2"}} class="nav-link" href="/Papelaria">Papelaria</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar