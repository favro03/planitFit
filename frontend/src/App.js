import React from 'react';
import { Container } from 'react-bootstrap'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import GoalsScreen from './screens/GoalsScreen'
import PlannerScreen from './screens/PlannerScreen'
import TrackerScreen from './screens/TrackerScreen'

function App() {
  return (
      <BrowserRouter>
        <Header />
  
        <main className='py-3'>
       <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/planner' element={<PlannerScreen />} />
            <Route path='/tracker' element={<TrackerScreen />} />
            <Route path='/goals' element={<GoalsScreen />} />
            
          </Routes>
          </Container>
        
        </main>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
