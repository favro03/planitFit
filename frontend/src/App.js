import React from 'react';
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import UserEditScreen from './screens/admin/UserEditScreen';
import UserListScreen from './screens/admin/UserListScreen';
import ProfileScreen from "./screens/ProfileScreen";
import HomeScreen from './screens/HomeScreen'
import GoalsScreen from './screens/GoalsScreen'
import PlannerListScreen from './screens/PlannerListScreen';
import PlannerEditScreen from './screens/PlannerEditScreen'
import PlannerViewScreen from './screens/PlannerViewScreen'
import TrackerListScreen from './screens/TrackerListScreen';
import TrackerViewScreen from './screens/TrackerViewScreen'
import TrackerEditScreen from './screens/TrackerEditSceren';
import Test from './screens/Test';


function App() {
  return (
      <BrowserRouter>
        <Header />
  
        <main className='py-3 '>
       <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} />

            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />

           
            <Route path='/goals' element={<GoalsScreen />} />

            <Route path='/plannerlist' element={<PlannerListScreen />} />
            <Route path='/planner/:id/edit' element={<PlannerEditScreen />} />
            <Route path='/planner/:id/view' element={<PlannerViewScreen />} />

            <Route path='/tracker' element={<TrackerListScreen />} />
            <Route path='/tracker/:id/view' element={<TrackerViewScreen />} />
            <Route path='/tracker/:id/edit' element={<TrackerEditScreen />} />

            <Route path='/test/:id' element={<Test />} />

            {/* Admin Screens */}
            <Route path='/admin/userlist' element={<UserListScreen />} />
            <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />
                
          </Routes>
          </Container>
        
        </main>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
