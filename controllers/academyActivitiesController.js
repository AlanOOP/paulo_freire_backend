import AcademyActivities from "../models/AcademyActivities.js";

const getAcademyActivities = async (req, res) => {
    try {
        const academyActivities = await AcademyActivities.find();
        res.json(academyActivities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



export{
    getAcademyActivities
}