import React from 'react';
import { Card } from 'react-bootstrap';
import Checkbox from '../components/Checkboxes'

const Planneritems = ({ planner }) => {
  const {
    exerciseGoal,
    amSelfCare,
    amTasks,
    food,
    pmActivities,
    dailyChore,
    pmSelfCare,
    reflection,
  } = planner;

  return (
    <div className="planner-card-container">
    <Card className='my-3 p-3 rounded plannerview'>
      <Card.Body>
        <Card.Title className='planner-card' as='div'>
 
          <Checkbox />
          < div className='planner-content'>
          <h3>Exercise Goal:</h3>
          <strong>{exerciseGoal}</strong>
          </div>
        </Card.Title>
        
        <div className='line'></div>

        <Card.Title className='planner-card' as='div'>
          <Checkbox />
          <div className='planner-content'>
          <h3>AM Self Care:</h3>
          <strong>{amSelfCare}</strong>
          </div>
        </Card.Title>
        <div className='line'></div>

        <Card.Title className='planner-card' as='div'>
          <Checkbox />
          <div className='planner-content'>
          <h3>AM Tasks:</h3>
          <strong>{amTasks}</strong>
          </div>
        </Card.Title>
        <div className='line'></div>

        <Card.Title className='planner-card' as='div'>
        <Checkbox />
        <div className='planner-content'>
          <h3>Breakfast:</h3>
          <strong>{food.breakfast}</strong>
          </div>
        </Card.Title>
        <div className='light-line'></div>
        <Card.Title className='planner-card' as='div'>
        <Checkbox />
        <div className='planner-content'>
          <h3>Lunch:</h3>
          <strong>{food.lunch}</strong>
          </div>
        </Card.Title>
        <div className='light-line'></div>
        <Card.Title className='planner-card' as='div'>
        <Checkbox />
        <div className='planner-content'>
          <h3>Snack:</h3>
          <strong>{food.snack}</strong>
          </div>
        </Card.Title>
        <div className='light-line'></div>
        <Card.Title className='planner-card' as='div'>
        <Checkbox />
        <div className='planner-content'>
          <h3>Dinner:</h3>
          <strong>{food.dinner}</strong>
          </div>
        </Card.Title>
        <div className='line'></div>

        <Card.Title className='planner-card' as='div'>
        <Checkbox />
        <div className='planner-content'>
          <h3>PM Activities:</h3>
          <strong>{pmActivities}</strong>
          </div>
        </Card.Title>
        <div className='line'></div>

        <Card.Title className='planner-card' as='div'>
        <Checkbox />
        <div className='planner-content'>
          <h3>Daily Chore:</h3>
          <strong>{dailyChore}</strong>
          </div>
        </Card.Title>
        <div className='line'></div>

        <Card.Title className='planner-card' as='div'>
        <Checkbox />
        <div className='planner-content'>
          <h3>PM Self Care:</h3>
          <strong>{pmSelfCare}</strong>
          </div>
        </Card.Title>
        <div className='line'></div>

        <Card.Title className='planner-card' as='div'>
        
        <div className='planner-content'>
          <h3>Reflection:</h3>
          <strong>{reflection}</strong>
          </div>
        </Card.Title>
      </Card.Body>
    </Card>
    </div>
  );
};

export default Planneritems;
