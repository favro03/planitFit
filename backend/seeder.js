import mongoose from "mongoose";
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import planners from './data/planners.js'
import User from './models/userModel.js'
import Planners from './models/plannerModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Planners.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);

        const dataWithUserIds = planners.map((planners, index) => ({
            ...planners,
            user: createdUsers[index]._id
        }));

        await Planners.insertMany(dataWithUserIds);
        console.log('Data Imported!'.green.inverse);
        process.exit(0);
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await Planners.deleteMany();
        await User.deleteMany();

        console.log('Data Destroyed!'.red.inverse);
        process.exit(0);
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
}

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
