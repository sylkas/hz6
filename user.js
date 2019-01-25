const axios = require('axios');

// const myAxios = axios.create({
//     headers: {'Content-Type': 'application/json'}
// });

const config = {
    headers: {'Content-Type': 'application/json'}
};


function getUser(id) {
    const url = `http://localhost:4800/users/${id}`;
    return axios.get(url, config)
        .then(response => console.log(response.data))
        .catch(error => console.log(error.message));
}

function deleteUser(id){
    const url = `http://localhost:4800/users/${id}`;
    return axios.delete(url, config)
        .then(response => console.log(response.data))
        .catch(error => console.log(error.message));
}

function addUser(newUserData){
    const url = 'http://localhost:4800/users';
    return axios.post(url, newUserData, config)
        .then(response => console.log(response.data))
        .catch(error => console.log(error.message));
}    

// myAxios.post('http://localhost:4800/users', newUserData)
// .then(response => console.log(response.data.id))
// .catch(error => console.log(error));

module.exports = {
    getUser,
    deleteUser,
    addUser,
};