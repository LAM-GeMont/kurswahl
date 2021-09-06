const mongoose = require('mongoose');

// TODO: Put this in config
const dbName = 'GemontData';

const usernameMinLength = 1;

const dbUser = '';
const dbPass = '';

const dbHost = '127.0.0.1';
const dbPort = 27017;

const dbUrl = `mongodb://${dbHost}:${dbPort}/${dbName}`;

function connectDBCredentials(user, pass) {
    mongoose.connect(
        dbUrl,
        {
            auth: {
                username: user,
                password: pass
            }
        },
        (err) => {
            console.log("Something went wrong while connecting to DB");
            console.log(err);
        }
    )
}

function connectDBWithoutCredentials() {
    mongoose.connect(
        dbUrl,
        {},
        (err) => {
            console.log("Something went wrong while connecting to DB");
            console.log(err);
        }
    )
}

function connect() {
    if (dbUser && dbPass) { // Check if dbUser + dbPass are both defined
        if (dbUser.length > usernameMinLength) { // If Username is set, could be without pass
            connectDBCredentials(dbUser, dbPass);
        } else
            connectDBWithoutCredentials();
    } else
        connectDBWithoutCredentials();
}

module.exports = {
    connect
}
