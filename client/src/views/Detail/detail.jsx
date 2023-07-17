import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getCountry, cleanDetail } from "../../redux/action";
import style from './detail.module.css';

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const country = useSelector(state => state.countryDetail)

    useEffect(() => {
        dispatch(getCountry(id))
        return () => {
            dispatch(cleanDetail()) // despacha cuando se desmonta
        }
    }, [])


    return (
        <div className={style.detailContain}>
            <div className={style.detailSubContain}>
                <div className={style.detailInfo}>
                    <div className={style.detailCountry}>
                        <img className={style.detailCountryImg} src={country[0]?.image} alt="flag" />
                    </div>
                    <div className={style.detailContainText}>
                        <h4 className={style.detailText}>ID: {country[0]?.id}</h4>
                        <h4 className={style.detailText}>Name: {country[0]?.name}</h4>
                        <h4 className={style.detailText}>Capital: {country[0]?.capital}</h4>
                        <h4 className={style.detailText}>Continent: {country[0]?.continent}</h4>
                        <h4 className={style.detailText}>Subregion: {country[0]?.subregion}</h4>
                        <h4 className={style.detailText}>Area: {country[0]?.area}</h4>
                        <h4 className={style.detailText}>Population: {country[0]?.population}</h4>
                    </div>
                </div>
                <div className={style.detailContainActivity}>
                    {
                        (country[0]?.Activities.length > 0) ?
                            <> {country[0]?.Activities?.map(e => (
                                <div className={style.detailCardActivity}>
                                    <p>{[`Actividad: ${e.name}`, <br />,
                                    `Dificultad: ${e.difficulty}`, <br />,
                                    `Duración: ${e.duration} hs`, <br />,
                                    `Estación: ${e.season}`]}
                                    </p>
                                </div>
                            ))}
                            </> :
                            <h3>{`El país ${country[0]?.name} no tiene actividades asociadas`}</h3>
                    }
                </div>
                <div className={style.detailContainBtn}>
                    <NavLink to={'/home'}>
                        <button className={style.detailBtn}>Home</button>
                    </NavLink>
                </div>
            </div>
        </div>

    )
}
export default Detail;