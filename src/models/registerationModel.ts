import mongoose from "mongoose";
import validator from "validator";

export interface registerationDocument extends mongoose.Document {
  event: mongoose.Types.ObjectId;
  registeredBy: mongoose.Types.ObjectId;
  registeredAt: String;
}

const registerationSchema = new mongoose.Schema({
  event: {
    type: mongoose.Types.ObjectId,
    ref: "Event",
  },
  registeredBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  registeredAt: {
    type: String,
    validate: validator.isDate,
  },
});

const Registeration = mongoose.model<registerationDocument>(
  "Registeration",
  registerationSchema
);

export default Registeration;
