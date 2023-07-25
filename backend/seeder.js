import mongoose from "mongoose";
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import planners from './data/planners.js';
import trackers from './data/trackers.js';
import User from './models/userModel.js';
import Planners from './models/plannerModel.js';
import Trackers from './models/trackerModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Planners.deleteMany();
    await Trackers.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const samplePlanners = planners.map((planner) => {
      return { ...planner };
    });

    await Planners.insertMany(samplePlanners);

    const sampleTrackers = trackers.map((tracker) => {
        return { ...tracker, user: adminUser };
      });
  
      await Trackers.insertMany(sampleTrackers);

    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Trackers.deleteMany();
    await Planners.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}