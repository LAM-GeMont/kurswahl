const express = require('express');
const app = express();

const session = require('express-session');

const db = require('./DB');

//
//  Connect to DB
//
db.connect();

//
//  Constants
//
const port = 3000;

//
//  MIDDLEWARE
//
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.disable('x-powered-by');

// CORS Header
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    res.header(
        'Access-Control-Expose-Headers',
        'x-access-token'
    );

    next();
});

// Session

// TODO: Get secret via Environment variable
// TODO: In production set cookie.secure: true
const sessionOptions = {
    secret: 'gemontsecretplschangemetosomethingcryptic',
    cookie: {
        maxAge: null,           // Cookie max Age in ms (null -> session cookie expires on closing the browser)
        sameSite: 'strict',     // Cookie Same Site restriction
        secure: false           // Change in prod or testing with ssl (HTTPS required for true) may need app.set('trust proxy', 1);
    },
    name: 'gemont-session',     // name of the session cookie
    proxy: undefined,           // set to true for 'X-Forwarded-Proto' header (reverse proxy trust), set to false to require TLS/SSL conn to proxy
    resave: false,              // deactivate automatic renewal of cookie, not necessary if it is only session
    rolling: false,             // Set cookie on every response (used for short non-session length maxAge)
    saveUninitialized: false,   // Saves sessions only if they are modified (depends on login logic)
    unset: 'destroy'            // What happens if req.session is deleted/set to null (destroy or keep)
}

app.use(session(sessionOptions))

//
//  REST API
//


//
//  SERVER
//
app.listen(port, () => {
    console.log(`The server is started on port: ${port}`);
});
