const validation = (form) => {
    const errors = {}

    // validation name

        if(!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(form.name)){
            errors.name  = "Solo se permiten letras y espacios";
        }
        else{
            errors.name  = "";
        }
        
    // validation difficulty

        if(!/^([1-5])$/.test(form.difficulty)){
            errors.difficulty = "Solo se permiten números del 1 al 5";
        }
        else{
            errors.difficulty = "";
        }

    // validation duration 

    if(!/^([1-9]|1[0-9]|2[0-4])$/.test(form.duration)){
        errors.duration = "Duración inválida (Min 1 / Max. 24)";
    }

    // validation season 

    if(!form.season){
        errors.season = "Campo vacío, seleccione mínimo una opcion";
    }


    
    if(!form.pais.length){
        errors.pais = "Campo vacío, seleccione mínimo una opcion";
    };
    
    return errors;
}

export default validation;