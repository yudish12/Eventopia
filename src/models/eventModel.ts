import mongoose, { mongo } from "mongoose";
import validator from "validator";

export interface EventDocument extends mongoose.Document {
  eventName: string;
  createdBy: mongoose.Types.ObjectId;
  registerationStart: string;
  registerationEndL: string;
  eventStart: string;
  eventEnd: string;
  description: string;
  logo: string;
  images: string[];
  prizes: [mongoose.Types.ObjectId];
}

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: [true, "Event must have a name"],
  },
  createdBy: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  registerationStart: {
    type: String,
    validate: validator.isDate,
  },
  registerationEnd: {
    type: String,
    validate: validator.isDate,
  },
  EventEnd: {
    type: String,
    validate: validator.isDate,
  },
  EventStart: {
    type: String,
    validate: validator.isDate,
  },
  description: {
    type: String,
    minLength: 10,
    maxLength: 300,
  },
  logo: String,
  images: [String],
  prizes: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Prizes",
    },
  ],
});

const Event = mongoose.model<EventDocument>("Event", eventSchema);

export default Event;
