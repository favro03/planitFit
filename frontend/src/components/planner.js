import React from 'react'
import { Card } from 'react-bootstrap'

const planner = ({planner}) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <a href={`planner/${planner.name}`}>

        </a>
      
    </Card>
  )
}

export default planner
