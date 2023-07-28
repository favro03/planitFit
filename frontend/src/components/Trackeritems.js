import React from 'react';
import { Card } from 'react-bootstrap';


const Trackeritems = ({ tracker }) => {
  const {
    date,
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
  } = tracker;

  return (
    <div className="tracker-card-container">
    <Card className='my-3 p-3 rounded trackerview'>
      <Card.Body>
        <Card.Title className='tracker-card' as='div'>
 
        
          < div className='tracker-content'>
          <h3>Date:</h3>
          <strong>{date}</strong>
          </div>
        </Card.Title>
        
        <div className='line'></div>

        <Card.Title className='tracker-card' as='div'>
         
          <div className='tracker-content'>
          <h3>Weight:</h3>
          <strong>{weight}</strong>
          </div>
        </Card.Title>
        <div className='line'></div>

        <Card.Title className='tracker-card' as='div'>
         
          <div className='tracker-content'>
          <h3>Neck:</h3>
          <strong>{neck}</strong>
          </div>
        </Card.Title>
        <div className='line'></div>

        <Card.Title className='tracker-card' as='div'>
       
        <div className='tracker-content'>
          <h3>Chest:</h3>
          <strong>{boobs}</strong>
          </div>
        </Card.Title>
        <div className='light-line'></div>
        <Card.Title className='tracker-card' as='div'>
       
        <div className='tracker-content'>
          <h3>waist:</h3>
          <strong>{waist}</strong>
          </div>
        </Card.Title>
        <div className='light-line'></div>
        <Card.Title className='tracker-card' as='div'>
       
        <div className='tracker-content'>
          <h3>Stomach:</h3>
          <strong>{stomach}</strong>
          </div>
        </Card.Title>
        <div className='light-line'></div>
        <Card.Title className='tracker-card' as='div'>
       
        <div className='tracker-content'>
          <h3>Hips:</h3>
          <strong>{hips}</strong>
          </div>
        </Card.Title>
        <div className='line'></div>

        <Card.Title className='tracker-card' as='div'>
       
        <div className='tracker-content'>
          <h3>Butt:</h3>
          <strong>{butt}</strong>
          </div>
        </Card.Title>
        <div className='line'></div>

        <Card.Title className='tracker-card' as='div'>
       
        <div className='tracker-content'>
          <h3>Thigh:</h3>
          <strong>{thigh}</strong>
          </div>
        </Card.Title>
        <div className='line'></div>

        <Card.Title className='tracker-card' as='div'>
       
        <div className='tracker-content'>
          <h3>Calf:</h3>
          <strong>{calf}</strong>
          </div>
        </Card.Title>
        <div className='line'></div>

        <Card.Title className='tracker-card' as='div'>
        
        <div className='tracker-content'>
          <h3>Arm:</h3>
          <strong>{arm}</strong>
          </div>
        </Card.Title>
      </Card.Body>
    </Card>
    </div>
  );
};

export default Trackeritems;
