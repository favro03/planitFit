import React from 'react';
import { Container } from 'react-bootstrap'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
      <BrowserRouter>
        <Header />
  
        <main className='py-3'>
       <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            
          </Routes>
          </Container>
        
        </main>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
