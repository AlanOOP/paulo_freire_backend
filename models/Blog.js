import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    img: {
        type: Date,
        default: Date.now,
    },
    public_id: {
        type: String,
    },

}, {
    timestamps: true,
});



const Blog = mongoose.model("Blog", blogSchema);

export default Blog;