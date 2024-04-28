import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB  from './config/db.js';


// import routes
import academyActivitiesRoutes from './routes/academyActivitiesRoutes.js';


const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Hello World');
});

//Routes
app.use('/api',academyActivitiesRoutes);


connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});