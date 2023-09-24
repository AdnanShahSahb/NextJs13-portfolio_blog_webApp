import mongoose from "mongoose";

const { Schema } = mongoose

const projSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    heading: {
        type: String,
        required: true
    },
    para: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    blogBy: {
        type: String,
        required: true
    },
    blogByImg: {
        type: String,
        required: true
    },
}, { timestamps: true }
)

export default mongoose.models.Projects || mongoose.model('Projects', projSchema)