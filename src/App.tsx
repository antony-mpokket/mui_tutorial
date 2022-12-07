
import './App.css';
import CustomRoutes from './components/Routes';
import {LocalizationProvider} from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
 

function App() {
  return (
    // <LocalizationProvider dateAdapter={AdapterDateFns}>
    //   <div className="App">
    //     {/* <MuiTypography /> */}
    //     <CustomRoutes />
    //   </div>
    // </LocalizationProvider>
    
      <div className="App">
        {/* <MuiTypography /> */}
        <CustomRoutes />
      </div>
  );
}

export default App;
