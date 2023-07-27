import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetPlannerDetailsQuery } from '../slices/plannersApiSlice';
import TestText from '../components/TestText';

const Test = () => {
  const { id } = useParams();
  const [testItem, setTestItem] = useState(false);

  // Fetch the start data based on the id
  const { data: plannerData, isLoading, error } = useGetPlannerDetailsQuery(id);

  useEffect(() => {
    // Check if the data is available and test is true for the specific id
    if (plannerData?.test === true) {
      setTestItem(true);
    } else {
      setTestItem(false);
    }
  }, [plannerData]);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          {testItem && <TestText />}
          {/* Render other components for the Start details here */}
        </>
      )}
    </>
  );
};

export default Test;
