import React  from "react";
import { Container } from '@mui/material';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home"
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";

function App() {
  
  return (
    <BrowserRouter>
        <Container maxWidth='lg' className="App">
          <Navbar />
            <Routes >
              <Route exact path='/' element={<Home />} />
              <Route exact path='/auth' element={<Auth />} />
            </Routes>
        </Container>
    </BrowserRouter>
  );
}

export default App;
