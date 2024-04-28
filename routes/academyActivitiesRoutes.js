import express from 'express';
import {
    getAcademyActivities
} from '../controllers/academyActivitiesController.js';

const router = express.Router();

router.get('/academy-activities', getAcademyActivities);


export default router;