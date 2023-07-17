import style from './Nav.module.css';
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import logoNav from "./logoGif.gif";

const Nav = ({ onSearch }) => {
    return (
        <div className={style.navContainer}>
            <div className={style.containImg}>
                <img className={style.imgLogo} src={logoNav} alt="imgLogo" />
            </div>
            <div className={style.buttonNav}>
                <NavLink to='/home' >
                    <button className={style.btnNav}>Home</button>
                </NavLink>
                <NavLink to='/activity'>
                    <button className={style.btnNav}>Crear Actividad</button>
                </NavLink>
            </div>
            <div>
                <SearchBar onSearch={onSearch} />
            </div>
        </div>
    )
}

export default Nav;