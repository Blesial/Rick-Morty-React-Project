
const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/
export function validation(userData) {

    let errors = {};

    if(!regexPassword.test(userData.username)) 
        errors.username = 'El usuario debe ser un email'
    else if (!userData.username)
    errors.username = 'El usuario no puede estar vacio'
    else if (userData.username.length > 35)
    errors.username = 'El nombre de usuario no puede tener mas de 35 caracteres'
    else if (userData.password.length < 6 || userData.password.length > 10)
    errors.password = 'La contra tiene que tener una longitud entre 6 y 10 caracteres'
    else if (!regexPassword.test(userData.password)) 
    errors.password = 'La contra tiene que tener al menos 1 numero'
    return errors;
}


