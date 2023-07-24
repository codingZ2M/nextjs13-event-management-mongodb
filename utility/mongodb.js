import mongoose from "mongoose";

let isDbConnected = false;

export const dbConnection = async () =>{
    mongoose.set('strictQuery', true);

    if(isDbConnected) {
        console.log("Mongo database is connected!");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "nextjs13_event_management",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isDbConnected= true;
        console.log("MongoDB Connected!")
    } catch(error) {
        console.log("MongoDb Connection Error!");
    }
}