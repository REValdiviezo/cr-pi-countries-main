const validation = (form) => {
    const errors = {}

    //* validation name

        if(!form.name){
            errors.name = "Nombre vacío"
        }
        if(!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(form.name)){
            errors.name  = "Solo se permiten letras y espacios";
        }
        else{
            errors.name  = "";
        }
        
    //* validation difficulty

        if(!form.difficulty){
            errors.difficulty =  "Dificultad vacío";
        }
        if(!/^([1-5])$/.test(form.difficulty)){
            errors.difficulty = "Solo se permiten números del 1 al 5";
        }
        else{
            errors.difficulty = "";
        }

    //* validation duration 

    if(!/^([0-9]|1[0-9]|2[0-3])$/.test(form.duration)){
        errors.duration = "Duración inválida";
    }
    else{
        errors.duration = "";
    }

    //* validation season 

    if(!form.season){
        errors.season = "Campo vacío, seleccione mínimo una opcion";
    }
    if(form.season === "Vacío"){
        errors.season = "Campo vacío, seleccione mínimo una opcion";
    }

    
    if(!form.pais.length){
        errors.pais = "Campo vacío, seleccione mínimo una opcion";
    }
    

    
    
    return errors;
}

export default validation;