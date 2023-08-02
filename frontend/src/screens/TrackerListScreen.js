import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash, FaPlus, FaEye } from 'react-icons/fa';
// import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import {
  useGetTrackersQuery,
  useDeleteTrackerMutation,
  useCreateTrackerMutation,
} from '../slices/trackersApiSlice';
import { toast } from 'react-toastify';

const TrackerListScreen = () => {
  // const { pageNumber } = useParams();
  const navigate = useNavigate();

 

  const { data, isLoading, error, refetch } = useGetTrackersQuery({
    // pageNumber,
    user: useSelector((state) => state.auth.user), // Pass the user ID from Redux state
  });


  const [deleteTracker, { isLoading: loadingDelete }] =
    useDeleteTrackerMutation();

  const deleteHandler = async (id) => {
    if (window.confirm('Are you sure')) {
      try {
        await deleteTracker(id);
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const [createTracker, { isLoading: loadingCreate }] =
    useCreateTrackerMutation();

  const createTrackerHandler = async () => {
   
      try {
        await createTracker();
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    
  };

  

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const sortedData = data ? [...data].sort((a, b) => b.createdAt.localeCompare(a.createdAt)) : [];

 
<button onClick={() => navigate('/trackergraphs')}>Graphs</button>

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Trackers</h1>
        </Col>
        
        <Col className='text-end'>
          <Button className='my-3' onClick={() => navigate('/trackergraphs')}>
            Graphs
          </Button>
        </Col>
       
        <Col className='text-end'>
          <Button className='my-3' onClick={createTrackerHandler}>
            <FaPlus /> Create Tracker
          </Button>
        </Col>
      </Row>

      {loadingCreate && <Loader />}
      {loadingDelete && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                
                <th>Created At</th>
                {/* <th>Date</th> */}
                <th>Weight</th>
                <th>Neck</th>
                <th>Chest</th>
                <th>Waist</th>
                <th>Stomach</th>
                <th>Hips</th>
                <th>Butt</th>
                <th>Thigh</th>
                <th>Calf</th>
                <th>Arms</th>
             
              </tr>
            </thead>
            <tbody>
              {sortedData?.map((tracker) => (
                <tr key={tracker._id}>
                  
                  <td>{formatDate(tracker.createdAt)}</td>
                  {/* <td>{tracker.date}</td> */}
                  <td>{tracker.weight}</td>
                  <td>{tracker.neck}</td>
                  <td>{tracker.boobs}</td>
                  <td>{tracker.waist}</td>
                  <td>{tracker.stomach}</td>
                  <td>{tracker.hips}</td>
                  <td>{tracker.butt}</td>
                  <td>{tracker.thigh}</td>
                  <td>{tracker.calf}</td>
                  <td>{tracker.arm}</td>
                  <td>
                    <LinkContainer to={`/tracker/${tracker._id}/edit`}>
                      <Button variant='light' className='btn-sm mx-2'>
                        <FaEdit />
                      </Button>
                    </LinkContainer>
                    
                    <LinkContainer to={`/tracker/${tracker._id}/view`}>
                      <Button variant='light' className='btn-sm mx-2'>
                        <FaEye />
                      </Button>
                    </LinkContainer>
                   
                    
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={() => deleteHandler(tracker._id)}
                    >
                      <FaTrash style={{ color: 'white' }} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default TrackerListScreen;
