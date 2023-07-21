import { useDispatch, useSelector } from "react-redux";
import { filterByActivity } from "../../redux/action";
import style from './FiltroOrdenamiento.module.css';

// Este componente FiltroOrdenamiento proporciona una interfaz para filtrar y
// ordenar países. Utiliza React Redux para manejar el estado y las acciones relacionadas con la store. Cuando los 
// usuarios seleccionan una opcion en las pestañas de selectores, se activan las funciones de manejo para realizar 
// las acciones correspondientes 

const FiltroOrdenamiento = ({handlerOrderByName, handlerByPopulation, handleClick, handleFilterContinent}) => {
    const dispatch = useDispatch();
    // El siguiente es un hook que utilizamos para acceder a la lista de actividades disponiblle e la store
    const activities = useSelector(state => state.activities);  
    
    // Funcion encargada de despachar la accion de filtrar 
    // los paises segun el nombre de actividad que haya seleccionado
    const handleActivity = (event) => {
        event.preventDefault();
        dispatch(filterByActivity(event.target.value))
    }
    //Extrae solo los nombres de las actividades de la lista activities.
    let values = activities.map(element => element.name)
    // Utiliza un conjunto para obtener valores únicos de los nombres de actividades.
    // Esto asegura que no haya duplicados en las opciones del selector.
    const onlyValues = [...new Set(values)]


    return (
        <div className={style.filterContain}>
                <button className={style.filterBtn} onClick={element => {handleClick(element)}}>Todos los Paises</button>
                <select className={style.filterSelect} onChange={handlerOrderByName}>
                    <option>Orden Alfabetico</option>
                    <option value='asc'>A - Z</option>
                    <option value='des'>Z - A</option>
                </select>
                <select className={style.filterSelect} onChange={(element) => {handleFilterContinent(element)}}>
                    <option value="All">Todos los Continentes</option>
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
                    <option value='All'>Actividades</option>
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