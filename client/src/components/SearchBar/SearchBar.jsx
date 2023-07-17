import {useState} from 'react';
import { useDispatch } from 'react-redux';
import style from './SearchBar.module.css'



const SearchBar = ({onSearch}) => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleClick = async() =>{
        await dispatch(onSearch(name))
    }

    return(
        <div className={style.searchContain}>
            <input className={style.searchInput} type="search" placeholder='Ingresa un país' onChange={handleChange} value={name}/>
            <button className={style.searchBtn} onClick={() =>{handleClick();setName('')}}>Buscar</button>
        </div>
    )
}

export default SearchBar;