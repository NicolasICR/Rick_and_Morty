const validation = (userData) => {
    const errors = {};
    

    if(!/\S+@\S+\.\S+/.test(userData.email)){
    errors.email = 'el email ingresado no es valido socio';
    }
    if(!userData.email){
        errors.email = 'debe ingresar un email socio';
    }
    if(userData.email.length > 35){
        errors.email = 'el email no debe ser mayor a 35 caracteres';
    }
    if(!/.*\d+-*/.test(userData.password)){
        errors.password = 'la contraseña debe contener al menos un numero'
    }
    if(userData.password.email < 6 || userData.password.length > 10){
        errors.password = 'la contraseña debe tener entre 6 y 10 caracteres'
    }


    return errors;
}

export default validation;