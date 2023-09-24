import mongoose from "mongoose";

const { Schema } = mongoose

const postSchema = new Schema({
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
}
    , { timestamps: true } // updates on update
)

 console.log('checking rendering times');
 // export default mongoose.model("Posts", postSchema)
 
 export default mongoose.models.Posts || mongoose.model('Posts', postSchema);


