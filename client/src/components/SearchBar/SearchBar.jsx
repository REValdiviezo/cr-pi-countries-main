import {useState} from 'react';
import { useDispatch } from 'react-redux';
import style from './SearchBar.module.css'

// Este componente SearchBar proporciona una barra de búsqueda donde los usuarios pueden ingresar el nombre de un
// país y buscarlo. Al hacer clic en el botón "Buscar", se activa la función onSearch(name),
// donde name es la coincidencia de búsqueda introducido por el usuario.

const SearchBar = ({onSearch}) => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleClick = () =>{
        dispatch(onSearch(name))
    }

    return(
        <div className={style.searchContain}>
            <input className={style.searchInput} type="search" placeholder='Ingresa un país' onChange={handleChange} value={name}/>
            <button className={style.searchBtn} onClick={() =>{handleClick();setName('')}}>Buscar</button>
        </div>
    )
}

export default SearchBar;