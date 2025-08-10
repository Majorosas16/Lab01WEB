import './header.css';

const Header = () => {
    return (
        <header>
        <img src="./src/assets/spotify.svg" alt="spotify" class="spotify-icon" />
        <section className='links'>
          <div className='header-links1'>
            <p>Premium</p>
            <p>Ayuda</p>
            <p>Descargar</p>
          </div>
          <hr class="vertical-hr"></hr>
          <div className='header-links2'>
            <p>Registrarse</p>
            <p>Iniciar sesión</p>
          </div>
        </section>
        </header>
    );
}

export default Header;