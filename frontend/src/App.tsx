import Box from '@mui/material/Box';
import React from 'react';
import Body from './components/Body/Body';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    // <div className="App">
    //   <NavBar />
    //   {/* <FunctionsBar /> */}
    //   <Body />
    // </div>
    <Box sx={{ width: "100vw", height: "100vh" }}>
      <NavBar />
      <Body />
      
    </Box>
  );
}

export default App;
