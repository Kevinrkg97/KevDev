import './navbar.css'

const NavBar = () => {
    return(
        <nav className='navBar'>
            <div className='container'>
                <ul className='sections'>
                    <li>Inicio</li>
                    <li>Sobre mí</li>
                    <li>Portafolio</li>
                    <li>Contacto</li>
                </ul>
                <button className="contacto" href="contacto">
                    Contacto
                </button>
            </div>
        </nav>
    )
}



export default NavBar;