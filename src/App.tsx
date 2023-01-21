import React from 'react';
import './App.css';
import { createTheme, colors, ThemeProvider } from '@mui/material';
import CustomRoutes from './components/Routes';
import {LocalizationProvider} from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
 

const theme = createTheme({
  status:{
    danger: '#e53e3e',
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
  },
});

function App() {
  return (
    // <LocalizationProvider dateAdapter={AdapterDateFns}>
    //   <div className="App">
    //     {/* <MuiTypography /> */}
    //     <CustomRoutes />
    //   </div>
    // </LocalizationProvider>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
      <div className="App">
        {/* <MuiTypography /> */}
        <CustomRoutes />
      </div>
      </React.StrictMode>
    </ThemeProvider>
  );
}

export default App;
