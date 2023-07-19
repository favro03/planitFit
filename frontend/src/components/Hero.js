import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PlannerImage from '../assets/Planner.jpg';
import WeightTrackerImage from '../assets/weightTracker.jpg';
import GoalsImage from '../assets/goals.jpg';

const Hero = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  const handleButtonClick = (path) => {
    if (userInfo) {
      navigate(path);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="button-container">
      <div>
        <button className="homescreen-btn" onClick={() => handleButtonClick('/plannerlist')}>
          <img src={PlannerImage} alt="Planner" />
        </button>
        <span className="title">
          <h2>Planner</h2>
        </span>
      </div>

      <div>
        <button className="homescreen-btn" onClick={() => handleButtonClick('/tracker')}>
          <img src={WeightTrackerImage} alt="Tracker" />
        </button>
        <span className="title">
          <h2>Tracker</h2>
        </span>
      </div>

      <div>
        <button className="homescreen-btn" onClick={() => handleButtonClick('/goals')}>
          <img src={GoalsImage} alt="Goals" />
        </button>
        <span className="title">
          <h2>Goals</h2>
        </span>
      </div>
    </div>
  );
};

export default Hero;
