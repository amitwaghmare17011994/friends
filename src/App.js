import React from 'react'

import { Container } from '@material-ui/core';
import './App.css';
import Routes from './Routes';
import StateProvider from './StateProvider';

function App() {


  return (
    <Container style={{ backgroundColor: '#eee', height: '100vh' }} maxWidth="xl">
      <StateProvider>
        <Routes />
      </StateProvider>
    </Container>
  );
}

export default App;
