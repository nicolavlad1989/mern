import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';   // dotenv Security: Keeps sensitive information out of the source code, helps prevent accidental exposure of sensitive information.
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Conected to MongoDB')
}).catch((err) => {
    console.log(err);
}) ;                                 //connect to MongoDB,   

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});


app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);