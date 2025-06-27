import {v2 as cloudinary} from "cloudinary"

const connectCloudinary = async () =>{
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    })
}

export default connectCloudinary;


// import { v2 as cloudinary } from 'cloudinary'
// import dotenv from 'dotenv'
// dotenv.config()

// const connectCloudinary = async () =>{
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET
// })

// cloudinary.uploader.upload("./test.jpg", {resource_type: 'image'})
//   .then(result => console.log(result.secure_url))
//   .catch(err => console.log("Upload failed:", err.message))
    
// }
// export default connectCloudinary;