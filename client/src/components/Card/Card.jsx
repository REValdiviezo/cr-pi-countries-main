import style from './Card.module.css'
import { NavLink } from "react-router-dom";

const Card = ({ id, name, image, continent, population }) => {
    return (
        <NavLink to={`/detail/${id}`} className={style.navLinkCard}>
            <div className={style.cardContainer}>
                <div>
                    <img className={style.bandera} src={image} alt="imgFlag" />
                </div>
                <div>
                    <h3 className={style.textCard}>Nombre: {name}</h3>
                    <h3 className={style.textCard}>Continente: {continent}</h3>
                    <h3 className={style.textCard}>Poblacion: {population}</h3>
                </div>

            </div>
        </NavLink>
    )
}

export default Card;