import { NavLink } from "react-router-dom";
import style from './landing.module.css';

const Landing = () => {
    return (
        <div className={style.landingContain}>
            <div className={style.landingSubContain}>
                <h1 className={style.landingTitle}>Henry PI Countries🚀</h1>
                <p className={style.landingMsg}>¡ Bienvenido a mi Proyecto Individual !</p>
                <NavLink to='/home'>
                    <button className={style.landingBtn}>Ingresar</button>
                </NavLink>
            </div>
        </div>
    )
}
export default Landing;