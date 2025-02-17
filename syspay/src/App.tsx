import { Route, Routes } from 'react-router';
import Dashboard from './Pages/Dashboard/Dashboard';
import './App.css';
import { Grid } from '@mui/material';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';

function App() {
  return (
    <>
    <Grid container >
      <Grid item xs={2}>
          <Navigation />
      </Grid>
      <Grid item xs={10}>
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard/>} />
        </Routes>
      </Grid>
    </Grid>
 
    </>
  );
}

export default App;
