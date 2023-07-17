//const db = require('../db');
const { Country, Activity } = require('../db')


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

const getAllActivities = async () => await Activity.findAll({
  include: {
    model: Country,
    attributes: ["name"],
    through: {
      attributes: []
    }
  }
});

const deleteActivities = async (id) => await Activity.destroy({ where: { id } })


module.exports = {
  postActivities,
  getAllActivities,
  deleteActivities
};