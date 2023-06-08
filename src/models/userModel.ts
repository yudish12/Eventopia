import mongoose from "mongoose";
import validator from "validator";

export interface UserDocument extends mongoose.Document {
  username: string;
  firstNmae: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
  phoneNumber: string;
  picture: string;
  college: string;
  age: number;
  eventsRegistered: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: [true, "User must have a name"],
    },
    firstNmae: {
      type: String,
      required: [true],
    },
    lastName: {
      type: String,
      required: [true],
    },
    email: {
      type: String,
      required: [true, "User must have an email"],
      validate: [validator.isEmail, "please enter valid email"],
      unique: [true, "User with this email already exists"],
    },
    password: {
      type: String,
      required: [true, "User must have a Password "],
      minlength: [8, "minimum 8 characters must be in password"],
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, "User must have a password"],
      minlength: [8, "minimum 8 characters must be in password"],
      validate: {
        //only runs on create and save
        validator: function (this: UserDocument, el: string) {
          return el === this.password;
        },
        message: "Passwords do not match",
      },
      select: false,
    },
    picture: String,
    phoneNumber: {
      type: String,
      validate: [validator.isMobilePhone],
    },
    college: String,
    age: Number,
    eventsRegistered: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Event",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model<UserDocument>("User", userSchema);

export default User;
