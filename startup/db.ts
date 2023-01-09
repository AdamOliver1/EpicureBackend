import mongoose from 'mongoose';


export const connectToDb = async () => {
    await mongoose.connect(process.env.DB_CONNECTION || "")
    .then(() => {
        console.log("connected to mongodb");
        
    })
}
