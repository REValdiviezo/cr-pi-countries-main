import style from './Paginado.module.css'

const Paginado = ({ countryPerPage, countries, paginado, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(countries / countryPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className={style.paginadoContainer}>
                {
                    pageNumbers?.map(number => {
                        return (
                            <li className={style.numPage} key={number}>
                                <a onClick={() => paginado(number)}>{number}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Paginado;