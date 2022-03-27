import './App.css';
import { Container, Row, Col, ThemeProvider } from "react-bootstrap";
import { Routes, Route, } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Profile from "./pages/Profile";
import Feed from "./pages/Feed";
import WebcamCapture from "./pages/WebcamCapture";
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <div className="App" style={{padding: "0px 20px"}}>
      <Container>
        <Row>
          <Col>
            <UserAuthContextProvider>
              <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<Signup/>} />
                <Route
                  path="/"
                  element={
                  <ProtectedRoute>
                    <Home/>
                  </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/recipe"
                  element={
                  <ProtectedRoute>
                    <Recipe/>
                  </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/profile"
                  element={
                  <ProtectedRoute>
                    <Profile/>
                  </ProtectedRoute>
                  }
                />
                <Route 
                  path="/feed"
                  element={
                  <ProtectedRoute>
                    <Feed/>
                  </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/uploadphoto" 
                  element={
                  <ProtectedRoute>
                    <WebcamCapture/>
                  </ProtectedRoute>
                  }
                />
              </Routes>
            </UserAuthContextProvider>            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
