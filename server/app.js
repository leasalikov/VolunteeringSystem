import express from 'express';
import cors from 'cors';
import { userRouter } from './routers/userRouter.js';
import { loginRouter } from './routers/loginRouter.js';
import { volunteerRouter } from './routers/volunteerRouter.js';
import { needyRouter } from './routers/needyRouter.js';
import { linkingRouter } from './routers/linkingRouter.js';
import { authMiddleWare } from './middlewere/authMiddleWare.js';
// import { emailRouter } from './routers/emailRouter.js';
// import { EmailRouter} from './routers/EmailRouter.js'

// import { logErrors } from './middleware/logError.js';

const app = express();

app.use(express.json());
app.use(cors());

// app.use(cookieParser());
// // Define a route for logging in
// app.post('/login', (req, res) => {
//     // Get the username and password from the request body
//     const { username, password } = req.body;
//     // Validate the credentials (this is just a mock example)
//     if (username === 'admin' && password === 'password') {
//       // Create a session object with the user's id and role
//       const session = { id: 1, role: 'admin' };
//       // Create a token with the session object as the payload and the secret key
//       const token = jwt.sign(session, secret);
//       // Set a cookie with the session id as the value
//       res.cookie('session', session.id);
//       // Send the token to the client
//       res.send(token);
//     } else {
//       // If the credentials are invalid, send a 401 response
//       res.status(401).send('Wrong username or password');
//     }
//   });

app.use('/login', loginRouter);

app.use('/user', userRouter);
app.use('/volunteer', volunteerRouter);
app.use('/needy', needyRouter);
app.use('/linking',linkingRouter);
// app.use('/Email',emailRouter)
app.use('/needyVolunteers',needyRouter)



// // Define a route for accessing a protected resource
// app.get('/protected', verifyToken, (req, res) => {
//     // Get the session id from the cookie
//     const sessionId = req.cookies['session'];
//     // Validate the session id (this is just a mock example)
//     if (sessionId === req.user.id) {
//       // If the session id matches the user id, send a 200 response
//       res.send('You are authorized to access this resource');
//     } else {
//       // If the session id does not match the user id, send a 403 response
//       res.status(403).send('Invalid session');
//     }
//   });
  
// app.use(logErrors);

app.listen(8080, (err) => { 
    console.log("hiiiiii")
    if (err) console.error(err);
    console.log("Server listening on PORT:", 8080);
});