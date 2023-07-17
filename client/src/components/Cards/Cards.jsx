import style from './Cards.module.css'
import { useSelector } from "react-redux";
import Card from "../Card/Card";

const Cards = ({currentCountry}) => {

   return (
      <div className={style.cardsContainer}>
         {
            currentCountry?.map(country => {
               return (
                  <Card
                     key={country.id}
                     id={country.id}
                     image={country.image}
                     name={country.name}
                     continent={country.continent}
                     population={country.population}
                  />
               )
            })
         }
      </div>
   )
}

export default Cards;