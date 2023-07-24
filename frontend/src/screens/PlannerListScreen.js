import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { FaEdit, FaTrash, FaPlus, FaEye } from 'react-icons/fa';
// import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
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
    user: useSelector((state) => state.auth.user), // Pass the user ID from Redux state
  });


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

  const sortedData = data ? [...data].sort((a, b) => b.createdAt.localeCompare(a.createdAt)) : [];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
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
                <th>Created At</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((planner) => (
                <tr key={planner._id}>
                  <td>{planner._id}</td>
                  <td>{formatDate(planner.createdAt)}</td>
                  <td>
                    <LinkContainer to={`/planner/${planner._id}/edit`}>
                      <Button variant='light' className='btn-sm mx-2'>
                        <FaEdit />
                      </Button>
                    </LinkContainer>
                    
                    <LinkContainer to={`/planner/${planner._id}/view`}>
                      <Button variant='light' className='btn-sm mx-2'>
                        <FaEye />
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
        </>
      )}
    </>
  );
};

export default PlannerListScreen;
