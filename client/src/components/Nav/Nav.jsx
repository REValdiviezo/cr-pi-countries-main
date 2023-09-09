import style from './Nav.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import logoNav from './logoGif.gif';

// Este componente Nav representa una barra de navegación con un logo en este caso un GIF, un botón para crear
// actividades y una barra de búsqueda con su boton de acción. El botón "Crear Actividad" redirige a la página de
// actividades cuando se hace clic en él gracias al NavLink, y la barra de búsqueda permite a los usuarios buscar
// un pais ó muchos dependiendo de la coincidencia.

const Nav = ({ onSearch }) => {
    const location = useLocation();

  return (
    <div className={style.navContainer}>
      <div className={style.containImg}>
        <img className={style.imgLogo} src={logoNav} alt='imgLogo' />
      </div>
      <div className={style.buttonNav}>
        <NavLink to='/home'>
          <button className={style.btnNav}>Home</button>
        </NavLink>
        <NavLink to='/activity'>
          <button className={style.btnNav}>Crear Actividad</button>
        </NavLink>
      </div>
      <div>
        {location.pathname === '/home' && <SearchBar onSearch={onSearch} />}
      </div>
    </div>
  );
};

export default Nav;
