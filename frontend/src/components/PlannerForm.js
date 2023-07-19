import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPlanner } from '../actions/plannerActions';
import { useNavigate } from 'react-router-dom';

const PlannerForm = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { userInfo } = useSelector((state) => state.userLogin);

  const [exerciseGoal, setExerciseGoal] = useState('');
  const [amSelfCare, setAmSelfCare] = useState('');
  const [amTasks, setAmTasks] = useState('');
  const [breakfast, setBreakfast] = useState('');
  const [lunch, setLunch] = useState('');
  const [dinner, setDinner] = useState('');
  const [snack, setSnack] = useState('');
  const [pmActivities, setPmActivities] = useState('');
  const [dailyChore, setDailyChore] = useState('');
  const [pmSelfCare, setPmSelfCare] = useState('');
  const [reflection, setReflection] = useState('');

  const handleSubmitForm = (e) => {
    e.preventDefault();

    // Check if user is logged in
    if (!userInfo) {
        history('/login'); // Redirect to login screen
        return;
      }
  

    const plannerData = {
      exerciseGoal,
      amSelfCare,
      amTasks,
      food: {
        breakfast,
        lunch,
        dinner,
        snack,
      },
      pmActivities,
      dailyChore,
      pmSelfCare,
      reflection,
    };

    dispatch(createPlanner(plannerData));
    handleSubmit(plannerData);
    // Clear form fields
    setExerciseGoal('');
    setAmSelfCare('');
    setAmTasks('');
    setBreakfast('');
    setLunch('');
    setDinner('');
    setSnack('');
    setPmActivities('');
    setDailyChore('');
    setPmSelfCare('');
    setReflection('');
  };

  return (
    <div className="planner-form-container">
      <form className="planner-form" onSubmit={handleSubmitForm}>
        <div className="form-group">
          <label htmlFor="exerciseGoal">Exercise Goal:</label>
          <input
            type="text"
            id="exerciseGoal"
            value={exerciseGoal}
            onChange={(e) => setExerciseGoal(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amSelfCare">AM Self Care:</label>
          <input
            type="text"
            id="amSelfCare"
            value={amSelfCare}
            onChange={(e) => setAmSelfCare(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amTasks">AM Tasks:</label>
          <input
            type="text"
            id="amTasks"
            value={amTasks}
            onChange={(e) => setAmTasks(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="breakfast">Breakfast:</label>
          <input
            type="text"
            id="breakfast"
            value={breakfast}
            onChange={(e) => setBreakfast(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lunch">Lunch:</label>
          <input
            type="text"
            id="lunch"
            value={lunch}
            onChange={(e) => setLunch(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dinner">Dinner:</label>
          <input
            type="text"
            id="dinner"
            value={dinner}
            onChange={(e) => setDinner(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="snack">Snack:</label>
          <input
            type="text"
            id="snack"
            value={snack}
            onChange={(e) => setSnack(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pmActivities">PM Activities:</label>
          <input
            type="text"
            id="pmActivities"
            value={pmActivities}
            onChange={(e) => setPmActivities(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dailyChore">Daily Chore:</label>
          <input
            type="text"
            id="dailyChore"
            value={dailyChore}
            onChange={(e) => setDailyChore(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pmSelfCare">PM Self Care:</label>
          <input
            type="text"
            id="pmSelfCare"
            value={pmSelfCare}
            onChange={(e) => setPmSelfCare(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="reflection">Reflection:</label>
          <textarea
            id="reflection"
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default PlannerForm;
