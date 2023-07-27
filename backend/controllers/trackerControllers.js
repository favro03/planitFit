import asyncHandler from 'express-async-handler'
import Tracker from "../models/trackerModel.js";

// @desc   Fetch all trackers
// @route  GET /api/tracker
// @access Public
const getTrackers = asyncHandler(async (req, res) => {
  const trackers = await Tracker.find({});
  res.json(trackers);
});

// @desc   Create a new tracker
// @route  POST /api/tracker
// @access Private
const createTracker = asyncHandler(async (req, res) => {
  
  const tracker = new Tracker({
    user: req.user._id,
    date:'',
    weight:'',
    neck:'',
    boobs:'',
    waist:'',
    stomach:'',
    hips:'',
    butt:'',
    thigh:'',
    calf:'',
    arm:'',
  });

  const createdTracker = await tracker.save();

  res.status(201).json(createdTracker);
});

// @desc   Update a tracker
// @route  PUT /api/tracker/:id
// @access Private
const updateTracker = asyncHandler(async (req, res) => {
  const {
    weight,
    neck,
    boobs,
    waist,
    stomach,
    hips,
    butt,
    thigh,
    calf,
    arm,
  } = req.body;

  const tracker = await Tracker.findById(req.params.id);

  if (tracker) {
    tracker.weight=weight
    tracker.neck=    neck
    tracker. boobs=    boobs
    tracker.waist=    waist
    tracker.stomach=    stomach
    tracker.hips=    hips
    tracker.butt=    butt
    tracker.thigh=    thigh
    tracker. calf=    calf
    tracker.arm=    arm

    const updatedTracker = await tracker.save();
    res.json(updatedTracker);
  } else {
    res.status(404);
    throw new Error("Tracker not found");
  }
});


// @desc   Get a single tracker by ID
// @route  GET /api/tracker/:id
// @access Private
const getTrackerById = asyncHandler(async (req, res) => {
  const tracker = await Tracker.findById(req.params.id);

  if (tracker) {
    res.json(tracker);
  } else {
    res.status(404);
    throw new Error("Tracker not found");
  }
});

// @desc   Delete a tracker
// @route  DELETE /api/tracker/:id
// @access Private
const deleteTracker = asyncHandler(async (req, res) => {
  const tracker = await Tracker.findById(req.params.id);

  if (tracker) {
    await tracker.deleteOne();
    res.json({ message: "Tracker removed" });
  } else {
    res.status(404);
    throw new Error("Tracker not found");
  }
});

export { createTracker, updateTracker, getTrackers, getTrackerById, deleteTracker };
