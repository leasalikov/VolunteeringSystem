import express from 'express';
import cors from 'cors';
import { userRouter } from './routers/userRouter.js';
import { loginRouter } from './routers/loginRouter.js';
import { volunteerRouter } from './routers/volunteerRouter.js';
import { needyRouter } from './routers/needyRouter.js';
import { linkingRouter } from './routers/linkingRouter.js';
import { emailRouter } from './routers/emailRouter.js';

// import { logErrors } from './middleware/logError.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/volunteer', volunteerRouter);
app.use('/needy', needyRouter);
app.use('/linking',linkingRouter);
app.use('/email',emailRouter)
app.use('/needyVolunteers',needyRouter)
app.use('/needyVolunteers/params',needyRouter)

// app.use(logErrors);

app.listen(8080, (err) => {
    console.log("hiiiiii")
    if (err) console.error(err);
    console.log("Server listening on PORT:", 8080);
});