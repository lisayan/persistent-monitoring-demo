import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@mui/material/styles';
import Home from './pages/Home';
import "cesium/Build/Cesium/Widgets/widgets.css";
import './styles/global.css';

const theme = createMuiTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}


export default App;
