import asyncHandler from 'express-async-handler'
import Planner from "../models/plannerModel.js";

// @desc   Fetch all plans
// @route  GET /api/planner
// @access Public
const getPlanners = asyncHandler(async (req, res) => {
  const planners = await Planner.find({});

  if (!planners) {
    // Handle the case when 'planners' is undefined or empty
    return res.json([]); // You can return an empty array or an appropriate response
  }

  // Convert the timestamps to Date objects
  const formattedPlanners = planners.map((planner) => {
    return {
      ...planner._doc,
      timestamps: planner.timestamps?.map((ts) => new Date(ts)) || [], // Use optional chaining and provide a fallback (empty array) if 'timestamps' is undefined
    };
  });

  res.json(formattedPlanners);
});


// @desc   Create a new planner
// @route  POST /api/planner
// @access Private
const createPlanner = asyncHandler(async (req, res) => {
  const planner = new Planner({
   
    exerciseGoal: '',
    amSelfCare:'',
    amTasks:'',
   
      breakfast:'',
      lunch:'',
      dinner:'',
      snack:'',
    
    pmActivities:'',
    dailyChore:'',
    pmSelfCare:'',
    reflection:'',
  });

  const createdPlanner = await planner.save();

  res.status(201).json(createdPlanner);
});

// @desc   Update a planner
// @route  PUT /api/planner/:id
// @access Private
const updatePlanner = asyncHandler(async (req, res) => {
  const {
    exerciseGoal,
    amSelfCare,
    amTasks,
breakfast,
lunch,
snack,
dinner,
    pmActivities,
    dailyChore,
    pmSelfCare,
    reflection,
  } = req.body;

  const planner = await Planner.findById(req.params.id);

  if (planner) {
    planner.exerciseGoal = exerciseGoal;
    planner.amSelfCare = amSelfCare;
    planner.amTasks = amTasks;
    planner.breakfast = breakfast;
    planner.lunch = lunch;
    planner.snack=snack;
    planner.dinner=dinner;22
    planner.pmActivities = pmActivities;
    planner.dailyChore = dailyChore;
    planner.pmSelfCare = pmSelfCare;
    planner.reflection = reflection;

    const updatedPlanner = await planner.save();
    res.json(updatedPlanner);
  } else {
    res.status(404);
    throw new Error("Planner not found");
  }
});


// @desc   Get a single planner by ID
// @route  GET /api/planner/:id
// @access Private
const getPlannerById = asyncHandler(async (req, res) => {
  const planner = await Planner.findById(req.params.id);

  if (planner) {
    res.json(planner);
  } else {
    res.status(404);
    throw new Error("Planner not found");
  }
});

// @desc   Delete a planner
// @route  DELETE /api/planner/:id
// @access Private
const deletePlanner = asyncHandler(async (req, res) => {
  const planner = await Planner.findById(req.params.id);

  if (planner) {
    await planner.deleteOne();
    res.json({ message: "Planner removed" });
  } else {
    res.status(404);
    throw new Error("Planner not found");
  }
});

export { createPlanner, updatePlanner, getPlanners, getPlannerById, deletePlanner };
