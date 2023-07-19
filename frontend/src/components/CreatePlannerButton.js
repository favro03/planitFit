import React from 'react';
import { Link } from 'react-router-dom';

const CreatePlannerButton = () => {
  return (
    <Link to="/createPlanner">
      <button>Create New Planner</button>
    </Link>
  );
};

export default CreatePlannerButton;
