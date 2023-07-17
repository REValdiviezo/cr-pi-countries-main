const db = require('../db');
const axios = require('axios')
const { Country, Activity } = require('../db')
const { Op } = require('sequelize');


const getAllCountries = async () => {
  const findAllCountries = async () => await Country.findAll({
    include: [{
      model: Activity,
      attributes: ["name", "difficulty", "duration", "season"],
      through: { attributes: [] },
    }]
  })
  if (!findAllCountries) {
    const response = await axios.get('http://localhost:5000/countries');
    const countries = response.data;
  
    const countriesList = countries.map(country => {
      return {
        id: country.cca3,
        name: country.name.common,
        image: country.flags.png,
        continent: country.continents[0],
        capital: country.capital ? country.capital[0] : 'capital no encontrada',
        subregion: country.subregion ? country.subregion : 'subregion no encontrada',
        area: country.area,
        population: country.population,
      };
    })
    return await Country.bulkCreate(countriesList);
  } else {
    return await findAllCountries()
  }
}

const getCountryById = async (id) => {

  const countryFilter = await Country.findAll({
    where: { id },
    include: {
      model: Activity,
      attributes: ["name", "difficulty", "duration", "season"],
      through: {
        attributes: []
      }
    }
  })
  return countryFilter
}
const getCountryByName = async (name) => {

  const countryFiltered = await Country.findAll({
    where:
    {
      name:
      {
        [Op.iLike]:
        `%${name}%`
      }
    }
  })
  return countryFiltered
}

module.exports = {
  getAllCountries,
  getCountryById,
  getCountryByName,
};