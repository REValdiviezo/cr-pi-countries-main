const { Router } = require("express");
const {postActivities, getAllActivities, deleteActivities} = require('../controllers/activityControllers')

const activitiesRouter = Router();
// En esta ruta nos llegan los datos por body para crear una nueva actividad
activitiesRouter.post('/', async (req, res) => {
    const {name, difficulty, duration, season, pais } = req.body
    
        try {
            if(!name || !difficulty || !duration || !season || !pais){
                throw Error('Falta información para crear la actividad')
            }
            const newActivity = await postActivities(name, difficulty, duration, season, pais)
            return res.status(200).json(newActivity)

        } catch (error) {
            res.status(500).json({error:error.message})
        }

})
// En esta ruta traemos todos las actividades creadas
activitiesRouter.get('/', async (req, res ) => {

        try {
            const allActivities = await getAllActivities()
            res.status(200).json(allActivities)
        } catch (error) {
            res.status(500).json({error:error.message})
        }
})

// En esta ruta se trae el id de la actividad que se desea eliminar
activitiesRouter.delete('/:id', async (req, res)=>{
    const { id } = req.params;
    
    try {
        if(!id){
            throw Error(`no existe la actividad con id: ${id}`)
        }else{
            const deleteActivity = await deleteActivities(id)
            res.status(200).json(deleteActivity)
        }
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

// Aqui controlamos las rutas desconocidas
activitiesRouter.all('*', (req, res) => {
    res.status(404).send(`Ruta Desconocida: ${req.method} ${req.originalUrl}`);
});

module.exports = activitiesRouter;