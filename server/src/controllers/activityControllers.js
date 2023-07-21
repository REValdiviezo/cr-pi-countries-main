//const db = require('../db');
const { Country, Activity } = require('../db')

// Esta funcion es la encargada de crear la actividad 
// y relacionarla con el pais que corresponde
// con los datos recibidos por la ruta
const postActivities = async (name, difficulty, duration, season, pais) => {

  const newActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });
  const country = await Country.findAll({
    where: { name: pais }
  })
   await newActivity.addCountries(country)

  const activity = await Activity.findAll({
    include: {
      model: Country,
      attributes: ["name"],
      through: {
        attributes: []
      }
    }
  });
  return activity

}
// Aqui traemos todas las actividades con su pais
const getAllActivities = async () => await Activity.findAll({
  include: {
    model: Country,
    attributes: ["name"],
    through: {
      attributes: []
    }
  }
});
// Esta funcion se encarga de eliminar un actividad indicada por id
const deleteActivities = async (id) => await Activity.destroy({ where: { id } })


module.exports = {
  postActivities,
  getAllActivities,
  deleteActivities
};