import Cards from '../../components/Cards/Cards'
import Nav from '../../components/Nav/Nav';
import FiltroOrdenamiento from '../../components/FiltroOrdenamiento/FiltroOrdenamiento';
import Paginado from '../../components/Paginado/Paginado';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCountries, onSearch, orderByName, orderByPopulation } from "../../redux/action";
import { useLocation } from 'react-router-dom';
import style from './home.module.css';

const Home = () => {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries)
    const [orden, setOrden] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [countryPerPage, setCountryPerPage] = useState(10)
    const indexOfLastCountry = currentPage * countryPerPage
    const indexOfFirstCountry = indexOfLastCountry - countryPerPage
    const currentCountry = countries.slice(indexOfFirstCountry, indexOfLastCountry)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getCountries());
    }, []);
    const location = useLocation();

    const handlerOrderByName = (event) => {
        event.preventDefault();
        dispatch(orderByName(event.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${event.target.value}`)
    }

    const handlerByPopulation = (event) => {
        event.preventDefault();
        dispatch(orderByPopulation(event.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${event.target.value}`)
    }

    return (
        <div className={style.homeContain}>
            <div>
                {location.pathname == '/home' && <Nav onSearch={onSearch} />}
            </div>
            <div>
                <FiltroOrdenamiento handlerOrderByName={handlerOrderByName} handlerByPopulation={handlerByPopulation}/>
            </div>
            <div>
                <Paginado countryPerPage={countryPerPage}  countries={countries.length} paginado={paginado}/>
            </div>
            <div>
                <Cards currentCountry={currentCountry}/>
            </div>
        </div>
    )
}
export default Home;