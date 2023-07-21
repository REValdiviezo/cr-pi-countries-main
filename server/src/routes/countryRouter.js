const { Router } = require("express");
const {getAllCountries, getCountryById, getCountryByName} = require ('../controllers/countryControllers');


const countriesRouter = Router();
// En esta ruta se implementa la busqueda por nombre
// en caso de que la query este vacia se devuelven todos los datos
countriesRouter.get('/', async (req, res)=>{
    const { name } = req.query

    try {
        if(name){
            const countryName = await getCountryByName(name)
           
                if(!countryName.length){
                    throw Error(`${name} no representa a ningún país`)
                } else {
                return res.status(200).json(countryName)
                }
        } else {
            const allCountries = await getAllCountries();
            return res.status(200).json(allCountries)
        }
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

// En esta ruta implementamos la busqueda por id
countriesRouter.get('/:id', async (req, res) => {
    
    const { id } = req.params
        
    try {
        if(id){
        const countryId = await getCountryById(id.toUpperCase())
            
            if(!countryId.length) throw Error(`No existe el país con id: ${id}`)
            else {
            return res.status(200).json(countryId)
            }
       } 
    } catch (error) {
        res.status(500).json({error:error.message})
    }   
})

// Aqui realizamos el manejo de rutas desconocidas
countriesRouter.all('*', (req, res) => {
    res.status(404).send(`Ruta Desconocida: ${req.method} ${req.originalUrl}`);
});

module.exports = countriesRouter;
