const axios = require('axios');
const argv = require('yargs').argv;

const userModule = require('./user');


//console.log(argv.id);
//userModule.getUser(argv.id);

//userModule.getUser(2);
//userModule.deleteUser(14);


const newUserData = {
    name: argv.name,
    username: argv.username,
    email: argv.email
};
userModule.addUser(newUserData);

// myAxios.post('http://localhost:4800/users', newUserData)
// .then(response => console.log(response.data.id))
// .catch(error => console.log(error));
