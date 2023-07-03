import React from 'react';
import { Link } from 'react-router-dom';
import PlannerImage from '../assets/Planner.jpg';
import WeightTrackerImage from '../assets/weightTracker.jpg';
import GoalsImage from '../assets/goals.jpg';


const Hero = () => {
  return (
    <div className="button-container">
      <Link style={{ textDecoration: 'none' }} to="/planner">
        <button className="homescreen-btn">
          <img src={PlannerImage} alt="Planner" />
        </button>
        <span className="title">
          <h2>Planner</h2>
        </span>
      </Link>

      <Link style={{ textDecoration: 'none' }} to="/tracker">
        <button className="homescreen-btn">
          <img src={WeightTrackerImage} alt="Tracker" />
        </button>
        <span className="title">
          <h2>Tracker</h2>
        </span>
      </Link>

      <Link style={{ textDecoration: 'none' }} to="/goals">
        <button className="homescreen-btn">
          <img src={GoalsImage} alt="Goals" />
        </button>
        <span className="title">
          <h2>Goals</h2>
        </span>
      </Link>
    </div>
  );
};

export default Hero;
