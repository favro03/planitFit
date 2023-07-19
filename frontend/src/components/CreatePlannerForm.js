

import { useCreatePlannerMutation } from '../slices/plannersApiSlice';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import FormContainer from '../../components/FormContainer';
import {useGetPlannerDetailsQuery, useUpdatePlannerMutation} from '../slices/plannersApiSlice'
import { toast } from 'react-toastify';

const CreatePlannerForm = () => {
  const { id: plannerId } = useParams();

  const [exerciseGoal, setExerciseGoal] = useState(['']);
  const [amSelfCare, setAmSelfCare] = useState(['']);
  const [amTasks, setAmTasks] = useState(['']);
  const [breakfast, setBreakfast] = useState('');
  const [lunch, setLunch] = useState('');
  const [dinner, setDinner] = useState('');
  const [snack, setSnack] = useState('');
  const [pmActivities, setPmActivities] = useState('');
  const [dailyChore, setDailyChore] = useState('');
  const [pmSelfCare, setPmSelfCare] = useState('');
  const [reflection, setReflection] = useState('');

  const {
    data: planner,
    isLoading,
    refetch,
    error,
  } = useGetPlannerDetailsQuery(plannerId);


  const [createPlanner, { isLoading }] = useCreatePlannerMutation();

  const [updatePlanner, { isLoading: loadingUpdate }] =
  useUpdatePlannerMutation();

  const navigate = useNavigate();

  const handleAddItem = (field, setState) => {
    setState((prevState) => [...prevState, '']);
  };

  const handleRemoveItem = (field, index, setState) => {
    setState((prevState) => {
      const updatedState = [...prevState];
      updatedState.splice(index, 1);
      return updatedState;
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const updatePlanner = {
      plannerId,
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

    toast.success('Planner updated');
    refetch();
    navigate('/planner');
  } catch (err) {
    toast.error(err?.data?.message || err.error);
  }
};
useEffect(() => {
    if (planner) {
      setExerciseGoal(planner.exerciseGoal);
      setAmSelfCare(planner.amSelfCare);
      setAmTasks(planner.amTasks);
      setBreakfast(planner.breakfast);
      setLunch(planner.lunch);
      setDinner(planner.dinner);
      setSnack(planner.snack);
      setPmActivities(planner.pmActivities);
      setDailyChore(planner.dailyChore);
      setPmSelfCare(planner.pmSelfCare);
      setReflection(planner.reflection);
    }
  }, [planner]);

  


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="exerciseGoal">Exercise Goal</label>
        {exerciseGoal.map((goal, index) => (
          <div key={index}>
            <input
              type="text"
              value={goal}
              onChange={(e) => {
                const updatedGoals = [...exerciseGoal];
                updatedGoals[index] = e.target.value;
                setExerciseGoal(updatedGoals);
              }}
            />
            {index === exerciseGoal.length - 1 && (
              <button
                type="button"
                onClick={() => handleAddItem('exerciseGoal', setExerciseGoal)}
              >
                +
              </button>
            )}
            {index !== exerciseGoal.length - 1 && (
              <button
                type="button"
                onClick={() => handleRemoveItem('exerciseGoal', index, setExerciseGoal)}
              >
                -
              </button>
            )}
          </div>
        ))}
      </div>

      <div>
        <label htmlFor="amSelfCare">AM Self Care</label>
        {amSelfCare.map((care, index) => (
          <div key={index}>
            <input
              type="text"
              value={care}
              onChange={(e) => {
                const updatedCare = [...amSelfCare];
                updatedCare[index] = e.target.value;
                setAmSelfCare(updatedCare);
              }}
            />
            {index === amSelfCare.length - 1 && (
              <button
                type="button"
                onClick={() => handleAddItem('amSelfCare', setAmSelfCare)}
              >
                +
              </button>
            )}
            {index !== amSelfCare.length - 1 && (
              <button
                type="button"
                onClick={() => handleRemoveItem('amSelfCare', index, setAmSelfCare)}
              >
                -
              </button>
            )}
          </div>
        ))}
      </div>

      <div>
        <label htmlFor="amTasks">AM Tasks</label>
        {amTasks.map((task, index) => (
          <div key={index}>
            <input
              type="text"
              value={task}
              onChange={(e) => {
                const updatedTasks = [...amTasks];
                updatedTasks[index] = e.target.value;
                setAmTasks(updatedTasks);
              }}
            />
            {index === amTasks.length - 1 && (
              <button
                type="button"
                onClick={() => handleAddItem('amTasks', setAmTasks)}
              >
                +
              </button>
            )}
            {index !== amTasks.length - 1 && (
              <button
                type="button"
                onClick={() => handleRemoveItem('amTasks', index, setAmTasks)}
              >
                -
              </button>
            )}
          </div>
        ))}
      </div>

      <div>
        <label htmlFor="breakfast">Breakfast</label>
        <input
          type="text"
          id="breakfast"
          value={breakfast}
          onChange={(e) => setBreakfast(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="lunch">Lunch</label>
        <input
          type="text"
          id="lunch"
          value={lunch}
          onChange={(e) => setLunch(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="dinner">Dinner</label>
        <input
          type="text"
          id="dinner"
          value={dinner}
          onChange={(e) => setDinner(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="snack">Snack</label>
        <input
          type="text"
          id="snack"
          value={snack}
          onChange={(e) => setSnack(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="pmActivities">PM Activities</label>
        <input
          type="text"
          id="pmActivities"
          value={pmActivities}
          onChange={(e) => setPmActivities(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="dailyChore">Daily Chore</label>
        <input
          type="text"
          id="dailyChore"
          value={dailyChore}
          onChange={(e) => setDailyChore(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="pmSelfCare">PM Self Care</label>
        <input
          type="text"
          id="pmSelfCare"
          value={pmSelfCare}
          onChange={(e) => setPmSelfCare(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="reflection">Reflection</label>
        <textarea
          id="reflection"
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
        />
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Creating...' : 'Create'}
      </button>
    </form>
  );
};

export default CreatePlannerForm;
