import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetTrackerDetailsQuery } from '../slices/trackersApiSlice';
import { Link } from 'react-router-dom';

import Loader from '../components/Loader';
import Message from '../components/Message';
import Trackeritems from '../components/Trackeritems';

const TrackerViewScreen = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetTrackerDetailsQuery(id); 
  

  const trackerDate = data?.createdAt
    ? new Date(data.createdAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : '';

  return (
    <>
      <Link to='/tracker' className='btn btn-light mb-4'>
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
          <h1 style={{ textAlign: 'center' }}>Today's Tracker - {trackerDate}</h1>
          
          
          <Row>
            <Col >
              <Trackeritems tracker={data} />
            </Col>
          </Row>
        </>
      ) : (
        <Message variant='info'>No tracker found</Message> 
      )}
    </>
  );
};

export default TrackerViewScreen;
