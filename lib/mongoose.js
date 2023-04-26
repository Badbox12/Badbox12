import mongoose from 'mongoose';
import mogoose from 'mongoose';
export async function initMongoose() {
    if(mongoose.connection.readyState === 1){
        return mongoose.connection.asPromise();
    }
  return await  mogoose.connect(process.env.MONGODB_URL)
}