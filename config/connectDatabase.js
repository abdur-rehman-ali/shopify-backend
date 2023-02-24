import mongoose from "mongoose";

const connectDatabase = URL => {
  return mongoose.connect(URL)
}
export default connectDatabase