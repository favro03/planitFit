
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { FaEdit, FaTrash , FaPlus} from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import Message from '../components/Message';
import Loader from '../components/Loader';
// import Paginate from '../components/Paginate';
import {
  useGetPlannersQuery,
  useDeletePlannerMutation,
  useCreatePlannerMutation,
} from '../slices/plannersApiSlice';
import { toast } from 'react-toastify';

const PlannerListScreen = () => {
  // const { pageNumber } = useParams();

  const { data, isLoading, error, refetch } = useGetPlannersQuery({
    // pageNumber,
  });

  // console.log(data)

  const [deletePlanner, { isLoading: loadingDelete }] =
    useDeletePlannerMutation();

  const deleteHandler = async (id) => {
    if (window.confirm('Are you sure')) {
      try {
        await deletePlanner(id);
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const [createPlanner, { isLoading: loadingCreate }] =
    useCreatePlannerMutation();

  const createPlannerHandler = async () => {
    
      try {
        await createPlanner();
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      
    }
  };

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Planners</h1>
        </Col>
        <Col className='text-end'>
          <Button className='my-3' onClick={createPlannerHandler}>
            <FaPlus /> Create Planner
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
              <th>ID</th>
              {/* <th>Exercise Goal</th>
              <th>AM Self Care</th>
              <th>AM Tasks</th>
              <th>Breakfast</th>
              <th>Lunch</th>
              <th>Dinner</th>
              <th>Snack</th>
              <th>PM Activities</th>
              <th>Daily Chore</th>
              <th>PM Self Care</th>
              <th>Reflection</th> */}
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
  {data?.planners && data.planners.map((planner) => (
      <tr>
        <td>{planner._id}</td>
        {/* <td>{planner.exerciseGoal}</td>
        <td>{planner.amSelfCare}</td>
        <td>{planner.amTasks}</td>
        <td>{planner.food.breakfast}</td>
        <td>{planner.food.lunch}</td>
        <td>{planner.food.dinner}</td>
        <td>{planner.food.snack}</td>
        <td>{planner.pmActivities}</td>
        <td>{planner.dailyChore}</td>
        <td>{planner.pmSelfCare}</td>
        <td>{planner.reflection}</td> */}
        <td>{planner.createdAt}</td>
        <td>
          <LinkContainer to={`/planner/${planner._id}/edit`}>
            <Button variant='light' className='btn-sm mx-2'>
              <FaEdit />
            </Button>
          </LinkContainer>
          <Button
            variant='danger'
            className='btn-sm'
            onClick={() => deleteHandler(planner._id)}
          >
            <FaTrash style={{ color: 'white' }} />
          </Button>
        </td>
      </tr>

  ))}
</tbody>


          </Table>
          {/* <Paginate pages={data.pages} page={data.page} isAdmin={true} /> */}
        </>
      )}
    </>
  );
};

export default PlannerListScreen;