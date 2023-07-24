import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { FaTrash } from 'react-icons/fa'
import { toast } from 'react-toastify';
import {
  useGetPlannerDetailsQuery,
  useUpdatePlannerMutation,
} from '../slices/plannersApiSlice';

const PlannerEditScreen = () => {
    const { id: plannerId } = useParams(); 
    

  // State variables for food
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [snack, setSnack] = useState([]);
  const [dinner, setDinner] = useState([]);

  // State variables for other items
  const [exerciseGoal, setExerciseGoal] = useState([]);
  const [amSelfCare, setAmSelfCare] = useState([]);
  const [amTasks, setAmTasks] = useState([]);
  const [pmActivities, setPmActivities] = useState([]);
  const [dailyChore, setDailyChore] = useState([]);
  const [pmSelfCare, setPmSelfCare] = useState([]);
  const [reflection, setReflection] = useState('');

  const {
    data: planner,
    isLoading,
    refetch,
    error,
  } = useGetPlannerDetailsQuery(plannerId);

  const [updatePlanner, { isLoading: loadingUpdate }] =
    useUpdatePlannerMutation();

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await updatePlanner({
        plannerId,
        exerciseGoal,
        amSelfCare,
        amTasks,
        breakfast,
        lunch,
        dinner,
        snack,
        pmActivities,
        dailyChore,
        pmSelfCare,
        reflection,
      });
      toast.success('Planner updated');
      refetch();
      navigate('/plannerlist');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  useEffect(() => {
    if (planner) {
      setBreakfast(planner.food.breakfast || []);
      setLunch(planner.food.lunch || []);
      setSnack(planner.food.snack || []);
      setDinner(planner.food.dinner || []);
      setExerciseGoal(planner.exerciseGoal || []);
      setAmSelfCare(planner.amSelfCare || []);
      setAmTasks(planner.amTasks || []);
      setPmActivities(planner.pmActivities || []);
      setDailyChore(planner.dailyChore || []);
      setPmSelfCare(planner.pmSelfCare || []);
      setReflection(planner.reflection || '');
    } else {
      // Set default values when planner is undefined
      setBreakfast([]);
      setLunch([]);
      setSnack([]);
      setDinner([]);
      setExerciseGoal([]);
      setAmSelfCare([]);
      setAmTasks([]);
      setPmActivities([]);
      setDailyChore([]);
      setPmSelfCare([]);
      setReflection('');
    }
  }, [planner]);

  const handleLunchChange = (index, value) => {
    const updatedLunch = [...lunch];
    updatedLunch[index] = value;
    setLunch(updatedLunch);
  };

  const addLunchField = () => {
    setLunch([...lunch, '']);
  };
  const handleDeleteLineItem = (list, index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    switch (list) {
      case breakfast:
        setBreakfast(updatedList);
        break;
      case lunch:
        setLunch(updatedList);
        break;
      case snack:
        setSnack(updatedList);
        break;
      case dinner:
        setDinner(updatedList);
        break;
      case exerciseGoal:
        setExerciseGoal(updatedList);
        break;
      case amSelfCare:
        setAmSelfCare(updatedList);
        break;
      case amTasks:
        setAmTasks(updatedList);
        break;
      case pmActivities:
        setPmActivities(updatedList);
        break;
      case dailyChore:
        setDailyChore(updatedList);
        break;
      case pmSelfCare:
        setPmSelfCare(updatedList);
        break;
      default:
        break;
    }
  };

  const addLineItem = (list, setList) => {
    setList([...list, '']);
  };
  return (
    <>
      <Link to='/plannerlist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Planner</h1>
        {loadingUpdate && <Loader />}
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error.data.message}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='exerciseGoal'>
          <Form.Label>Exercise Goal</Form.Label>
          {exerciseGoal.map((item, index) => (
            <div key={index} className='d-flex align-items-center'>
              <Form.Control
                type='text'
                placeholder={`Enter Exercise Goal ${index + 1}`}
                value={item}
                onChange={(e) => {
                  const updatedExerciseGoal = [...exerciseGoal];
                  updatedExerciseGoal[index] = e.target.value;
                  setExerciseGoal(updatedExerciseGoal);
                }}
              />
              <Button
                variant='light'
                className='ml-2'
                onClick={() => handleDeleteLineItem(exerciseGoal, index)}
              >
                <FaTrash />
              </Button>
            </div>
          ))}
          <Button onClick={() => addLineItem(exerciseGoal, setExerciseGoal)}>
            +
          </Button>
        </Form.Group>

        <Form.Group controlId='amSelfCare'>
          <Form.Label>AM Self Care</Form.Label>
          {amSelfCare.map((item, index) => (
            <div key={index} className='d-flex align-items-center'>
              <Form.Control
                type='text'
                placeholder={`Enter AM Self Care ${index + 1}`}
                value={item}
                onChange={(e) => {
                  const updatedAmSelfCare = [...amSelfCare];
                  updatedAmSelfCare[index] = e.target.value;
                  setAmSelfCare(updatedAmSelfCare);
                }}
              />
              <Button
                variant='light'
                className='ml-2'
                onClick={() => handleDeleteLineItem(amSelfCare, index)}
              >
                <FaTrash />
              </Button>
            </div>
          ))}
          <Button onClick={() => addLineItem(amSelfCare, setAmSelfCare)}>
            +
          </Button>
        </Form.Group>

        <Form.Group controlId='amTasks'>
          <Form.Label>AM Tasks</Form.Label>
          {amTasks.map((item, index) => (
            <div key={index} className='d-flex align-items-center'>
              <Form.Control
                type='text'
                placeholder={`Enter AM Task ${index + 1}`}
                value={item}
                onChange={(e) => {
                  const updatedAmTasks = [...amTasks];
                  updatedAmTasks[index] = e.target.value;
                  setAmTasks(updatedAmTasks);
                }}
              />
              <Button
                variant='light'
                className='ml-2'
                onClick={() => handleDeleteLineItem(amTasks, index)}
              >
                <FaTrash />
              </Button>
            </div>
          ))}
          <Button onClick={() => addLineItem(amTasks, setAmTasks)}>+</Button>
        </Form.Group>

        <Form.Group controlId='breakfast'>
          <Form.Label>Breakfast</Form.Label>
          {breakfast.map((item, index) => (
            <div key={index} className='d-flex align-items-center'>
              <Form.Control
                type='text'
                placeholder={`Enter Breakfast ${index + 1}`}
                value={item}
                onChange={(e) => {
                  const updatedBreakfast = [...breakfast];
                  updatedBreakfast[index] = e.target.value;
                  setBreakfast(updatedBreakfast);
                }}
              />
              <Button
                variant='light'
                className='ml-2'
                onClick={() => handleDeleteLineItem(breakfast, index)}
              >
                <FaTrash />
              </Button>
            </div>
          ))}
          <Button onClick={() => addLineItem(breakfast, setBreakfast)}>+</Button>
        </Form.Group>

        <Form.Group controlId='lunch'>
          <Form.Label>Lunch</Form.Label>
          {lunch.map((item, index) => (
            <div key={index} className='d-flex align-items-center'>
              <Form.Control
                type='text'
                placeholder={`Enter Lunch ${index + 1}`}
                value={item}
                onChange={(e) => handleLunchChange(index, e.target.value)}
              />
              <Button
                variant='light'
                className='ml-2'
                onClick={() => handleDeleteLineItem(lunch, index)}
              >
                <FaTrash />
              </Button>
            </div>
          ))}
          <Button onClick={addLunchField}>+</Button>
        </Form.Group>

        <Form.Group controlId='snack'>
          <Form.Label>Snack</Form.Label>
          {snack.map((item, index) => (
            <div key={index} className='d-flex align-items-center'>
              <Form.Control
                type='text'
                placeholder={`Enter Snack ${index + 1}`}
                value={item}
                onChange={(e) => {
                  const updatedSnack = [...snack];
                  updatedSnack[index] = e.target.value;
                  setSnack(updatedSnack);
                }}
              />
              <Button
                variant='light'
                className='ml-2'
                onClick={() => handleDeleteLineItem(snack, index)}
              >
                <FaTrash />
              </Button>
            </div>
          ))}
          <Button onClick={() => addLineItem(snack, setSnack)}>+</Button>
        </Form.Group>

        <Form.Group controlId='dinner'>
          <Form.Label>Dinner</Form.Label>
          {dinner.map((item, index) => (
            <div key={index} className='d-flex align-items-center'>
              <Form.Control
                type='text'
                placeholder={`Enter Dinner ${index + 1}`}
                value={item}
                onChange={(e) => {
                  const updatedDinner = [...dinner];
                  updatedDinner[index] = e.target.value;
                  setDinner(updatedDinner);
                }}
              />
              <Button
                variant='light'
                className='ml-2'
                onClick={() => handleDeleteLineItem(dinner, index)}
              >
                <FaTrash />
              </Button>
            </div>
          ))}
          <Button onClick={() => addLineItem(dinner, setDinner)}>+</Button>
        </Form.Group>

        <Form.Group controlId='pmActivities'>
          <Form.Label>PM Activities</Form.Label>
          {pmActivities.map((item, index) => (
            <div key={index} className='d-flex align-items-center'>
              <Form.Control
                type='text'
                placeholder={`Enter PM Activity ${index + 1}`}
                value={item}
                onChange={(e) => {
                  const updatedPmActivities = [...pmActivities];
                  updatedPmActivities[index] = e.target.value;
                  setPmActivities(updatedPmActivities);
                }}
              />
              <Button
                variant='light'
                className='ml-2'
                onClick={() => handleDeleteLineItem(pmActivities, index)}
              >
                <FaTrash />
              </Button>
            </div>
          ))}
          <Button onClick={() => addLineItem(pmActivities, setPmActivities)}>
            +
          </Button>
        </Form.Group>

        <Form.Group controlId='dailyChore'>
          <Form.Label>Daily Chore</Form.Label>
          {dailyChore.map((item, index) => (
            <div key={index} className='d-flex align-items-center'>
              <Form.Control
                type='text'
                placeholder={`Enter Daily Chore ${index + 1}`}
                value={item}
                onChange={(e) => {
                  const updatedDailyChore = [...dailyChore];
                  updatedDailyChore[index] = e.target.value;
                  setDailyChore(updatedDailyChore);
                }}
              />
              <Button
                variant='light'
                className='ml-2'
                onClick={() => handleDeleteLineItem(dailyChore, index)}
              >
                <FaTrash />
              </Button>
            </div>
          ))}
          <Button onClick={() => addLineItem(dailyChore, setDailyChore)}>
            +
          </Button>
        </Form.Group>

        <Form.Group controlId='pmSelfCare'>
          <Form.Label>PM Self Care</Form.Label>
          {pmSelfCare.map((item, index) => (
            <div key={index} className='d-flex align-items-center'>
              <Form.Control
                type='text'
                placeholder={`Enter PM Self Care ${index + 1}`}
                value={item}
                onChange={(e) => {
                  const updatedPmSelfCare = [...pmSelfCare];
                  updatedPmSelfCare[index] = e.target.value;
                  setPmSelfCare(updatedPmSelfCare);
                }}
              />
              <Button
                variant='light'
                className='ml-2'
                onClick={() => handleDeleteLineItem(pmSelfCare, index)}
              >
                <FaTrash />
              </Button>
            </div>
          ))}
          <Button onClick={() => addLineItem(pmSelfCare, setPmSelfCare)}>
            +
          </Button>
        </Form.Group>

        <Form.Group controlId='reflection'>
          <Form.Label>Reflection</Form.Label>
          <Form.Control
            as='textarea'
            placeholder='Enter Reflection'
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
          />
        </Form.Group>

<Button type='submit' variant='primary' style={{ marginTop: '1rem', width: '100%',}}>
  Update
</Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default PlannerEditScreen;
