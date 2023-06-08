import mongoose from "mongoose";

export interface prizeDocument extends mongoose.Document {
  position: string;
  description: string;
}

const prizeSchema = new mongoose.Schema({
  position: String,
  description: {
    type: String,
    maxLength: 50,
    minLength: 5,
  },
});

const Prize = mongoose.model<prizeDocument>("Prize", prizeSchema);

export default Prize;
