import mongoose from "mongoose";

const trackerSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Create a reference to the User model
          },
          weight: {type: Number},
          neck: {type: Number},
          boobs: {type: Number},
          waist: {type: Number},
          stomach: {type: Number},
          hips: {type: Number},
          butt: {type: Number},
          thigh: {type: Number},
          calf: {type: Number},
          arm: {type: Number},
          date: Date,
    },
    {
        timestamps: true,
    }
);
const Tracker = mongoose.model('Tracker', trackerSchema)

export default Tracker