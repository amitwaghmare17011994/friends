import FirendsPage from './Pages/FirendsPage/FirendsPage';

import './App.css';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Container style={{backgroundColor:'#eee',height:'100vh'}} maxWidth="xl">
       <FirendsPage/>
    </Container>
  );
}

export default App;
