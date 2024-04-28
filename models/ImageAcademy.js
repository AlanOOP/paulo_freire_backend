import mongoose from "mongoose";

const galeryAcademySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    url: {
        type: String,
        required: true,
    },
    public_id: {
        type: String,
        required: true,
    },
    academyActivities:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AcademyActivities'
    }
});

const GaleryAcademy = mongoose.model("GaleryAcademy", galeryAcademySchema);
export default GaleryAcademy;