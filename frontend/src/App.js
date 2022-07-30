import React  from "react";
import { Container } from '@mui/material';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home"
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import  Toast  from "./components/Toast/Toast";
function App() {
  
  return (
    <BrowserRouter>
        <Container maxWidth='lg' className="App">
          <Navbar />
            <Routes >
              <Route exact path='/' element={<Home />} />
              <Route exact path='/auth' element={<Auth />} />
            </Routes>
            <Toast/>
        </Container>
    </BrowserRouter>
    
  );
}

export default App;
