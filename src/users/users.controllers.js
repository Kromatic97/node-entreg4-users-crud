
const uuid = require ('uuid')

//!Creamos la Base de Datos//
const userDB = [
    {
    id:'a451e76f-830d-4d9b-a95a-83bb42630c54',
    first_name:'raul',
    last_name:'romero',
    email:'rog@gmail.com',
    password:'123',
    birthday:'1989/05/23'
    },

    {
    id:'cc00b45b-097f-4cb4-9ccd-1b4fa67c8a98',
    first_name:'elize',
    last_name:'maletz',
    email:'eli@gmail.com',
    password:'567',
    birthday:'1999/09/25'
    },
];

//?ACCIONES de los controladores//

//! --router.get('/users')=== a esta ruta se envia toda la base de datos===
const getAllUsers = () => {
    return userDB
}

//! --router.get('/users/:id')===trae los datos que pide usuario por id===
const getUserById = (id) => {
    const data = userDB.find(user => user.id === id)
    return data
}


//!--router.post('/users')===crea un nuevo titulo en la base de datos===
const createUser = ( name ) => {
    const newUser = {
        id: uuid.v4(),
        first_name:name,

       
    }

    userDB.push(newUser)
    return newUser
}

module.exports = {
    getAllUsers, 
    getUserById,
    createUser
}