import mongoose from 'mongoose';

const plannerSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Create a reference to the User model
    },
    test:{type: Boolean},
    exerciseGoal: { type: [String] },
    amSelfCare: { type: [String] },
    amTasks: { type: [String] },
    
      breakfast: { type: [String] },
      lunch: { type: [String] },
      snack: { type: [String] },
      dinner: { type: [String] },
    
    pmActivities: { type: [String] },
    dailyChore: { type: [String] },
    pmSelfCare: { type: [String] },
    reflection: { type: String },
  },
  {
    timestamps: true,
  }
);

const Planner = mongoose.model('Planner', plannerSchema);

export default Planner;
