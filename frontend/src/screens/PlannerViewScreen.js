import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetPlannerDetailsQuery } from '../slices/plannersApiSlice'; // Updated import
import { Link } from 'react-router-dom';

import Loader from '../components/Loader';
import Message from '../components/Message';
import Planneritems from '../components/Planneritems';

const PlannerViewScreen = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetPlannerDetailsQuery(id); // Use useGetPlannerDetailsQuery with the id

  
  // Create a new variable to store the formatted planner date
  const plannerDate = data?.createdAt
    ? new Date(data.createdAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : '';

  return (
    <>
      <Link to='/plannerlist' className='btn btn-light mb-4'>
        Go Back
      </Link>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : data ? ( // Check if data exists
        <>
          <h1 style={{ textAlign: 'center' }}>Today's Planner - {plannerDate}</h1>
          
          
          <Row>
            <Col >
              <Planneritems planner={data} /> {/* Render the Planneritems component with data */}
            </Col>
          </Row>
        </>
      ) : (
        <Message variant='info'>No planner found</Message> // Display message if data is not available
      )}
    </>
  );
};

export default PlannerViewScreen;
