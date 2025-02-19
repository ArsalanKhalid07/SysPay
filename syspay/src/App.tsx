import { Route, Routes } from 'react-router';
import Dashboard from './Pages/Dashboard/Dashboard';
import { Grid } from '@mui/material';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import "./Responsive.scss";
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <Grid container className='mainAppComponent' >
      <Grid item xs={2} >
          <Navigation />
      </Grid>
      <Grid item xs={10}  >
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard/>} />
        </Routes>
        <Footer />
      </Grid>
    </Grid>
 
    </>
  );
}

export default App;
