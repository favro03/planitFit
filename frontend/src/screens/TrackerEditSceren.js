import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { toast } from 'react-toastify';
import {
  useGetTrackerDetailsQuery,
  useUpdateTrackerMutation,
} from '../slices/trackersApiSlice';

const TrackerEditScreen = () => {
    const { id: trackerId } = useParams(); 
    

 
  const [weight, setWeight] = useState([]);
  const [neck, setNeck] = useState([]);
  const [boobs, setBoobs] = useState([]);
  const [waist, setWaist] = useState([]);
  const [stomach, setStomach] = useState([]);
  const [hips, setHips] = useState([]);
  const [butt, setButt] = useState([]);
  const [thigh, setThigh] = useState([]);
  const [calf, setCalf] = useState([]);
  const [arm, setArm] = useState([]);

  const {
    data: tracker,
    isLoading,
    refetch,
    error,
  } = useGetTrackerDetailsQuery(trackerId);

  const [updateTracker, { isLoading: loadingUpdate }] =
    useUpdateTrackerMutation();

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await updateTracker({
        trackerId,
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
      });
      toast.success('Tracker updated');
      refetch();
      navigate('/tracker');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  useEffect(() => {
    if (tracker) {
      setWeight(tracker.weight || '');
      setNeck(tracker.neck || '');
      setBoobs(tracker.boobs || '');
      setWaist(tracker.waist || '');
      setStomach(tracker.stomach || '');
      setHips(tracker.hips || '');
      setButt(tracker.butt || '');
      setThigh(tracker.thigh || '');
      setCalf(tracker.calf || '');
      setArm(tracker.arm || '');
    } else {
      // Set default values when planner is undefined
      setWeight('');
      setNeck('');
      setBoobs('');
      setWaist('');
      setStomach('');
      setHips('');
      setButt('');
      setThigh('');
      setCalf('');
      setArm('');
    }
  }, [tracker]);

  

  
  
  return (
    <>
      <Link to='/tracker' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Tracker</h1>
        {loadingUpdate && <Loader />}
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error.data.message}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
           
        <Form.Group controlId='weight'>
          <Form.Label>Weight</Form.Label>
          <Form.Control
            as='textarea'
            placeholder='Enter Weight'
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='neck'>
          <Form.Label>Neck</Form.Label>
          <Form.Control
            as='textarea'
            placeholder='Enter Neck Measurments'
            value={neck}
            onChange={(e) => setNeck(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='boobs'>
          <Form.Label>Chest</Form.Label>
          <Form.Control
            as='textarea'
            placeholder='Enter Chest Measurement'
            value={boobs}
            onChange={(e) => setBoobs(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='waist'>
          <Form.Label>Waist</Form.Label>
          <Form.Control
            as='textarea'
            placeholder='Enter Waist Measurment'
            value={waist}
            onChange={(e) => setWaist(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='stomach'>
          <Form.Label>Stomach</Form.Label>
          <Form.Control
            as='textarea'
            placeholder='Enter Stomach Measurment'
            value={stomach}
            onChange={(e) => setStomach(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='hips'>
          <Form.Label>Hips</Form.Label>
          <Form.Control
            as='textarea'
            placeholder='Enter Hips Measurment'
            value={hips}
            onChange={(e) => setHips(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='butt'>
          <Form.Label>Butt</Form.Label>
          <Form.Control
            as='textarea'
            placeholder='Enter Butt Measurement'
            value={butt}
            onChange={(e) => setButt(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='thigh'>
          <Form.Label>Thigh</Form.Label>
          <Form.Control
            as='textarea'
            placeholder='Enter Thigh'
            value={thigh}
            onChange={(e) => setThigh(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='calf'>
          <Form.Label>Calf</Form.Label>
          <Form.Control
            as='textarea'
            placeholder='Enter Calf Measurement'
            value={calf}
            onChange={(e) => setCalf(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='arm'>
          <Form.Label>Arm</Form.Label>
          <Form.Control
            as='textarea'
            placeholder='Enter Arm Measurement'
            value={arm}
            onChange={(e) => setArm(e.target.value)}
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

export default TrackerEditScreen;
