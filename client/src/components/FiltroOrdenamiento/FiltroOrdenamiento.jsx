import { useDispatch, useSelector } from "react-redux";
import { getCountries, filterCountryByContinent, filterByActivity } from "../../redux/action";
import style from './FiltroOrdenamiento.module.css';

const FiltroOrdenamiento = ({handlerOrderByName, handlerByPopulation}) => {
    const dispatch = useDispatch();
    const activities = useSelector(state => state.activities)

    const handleClick = (event) => {
        event.preventDefault();
        dispatch(getCountries())
    }

    const handleFilterContinent = (event) => {
        dispatch(filterCountryByContinent(event.target.value))
    }
    const handleActivity = (event) => {
        dispatch(filterByActivity(event.target.value))
    }
    let values = activities.map(element => element.name)
    const onlyValues = [...new Set(values)]


    return (
        <div className={style.filterContain}>
                <button className={style.filterBtn} onClick={element => {handleClick(element)}}>Todos los Paises</button>
                <select className={style.filterSelect} onChange={handlerOrderByName}>
                    <option >Orden Alfabetico</option>
                    <option value='asc'>A - Z</option>
                    <option value='des'>Z - A</option>
                </select>
                <select className={style.filterSelect} onChange={(element) => {handleFilterContinent(element)}}>

                    <option value="All">Todos los continentes</option>
                    <option value="Asia">Asia</option>
                    <option value="North America">Nortemérica</option>
                    <option value="South America">Sudamerica</option>
                    <option value="Africa">África</option>
                    <option value="Antarctica">Antártida</option>
                    <option value="Europe">Europa</option>
                    <option value="Oceania">Oceanía</option>
                </select>
                <select className={style.filterSelect} onChange={(element) => {handlerByPopulation(element)}}>
                    <option>Cantidad de Poblacion</option>
                    <option value="Menor">Min</option>
                    <option value="Mayor">Max</option>
                </select>
                <select className={style.filterSelect} onChange={handleActivity}>
                    {/* <option >Actividad</option> */}
                    <option value='All'>Actividades Creadas</option>
                    {
                        onlyValues?.map((element) => {
                            return <option key={element} value={element}>{element}</option>
                        })
                    }
                </select>
        </div>
    )
}

export default FiltroOrdenamiento;