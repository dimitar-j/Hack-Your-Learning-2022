import './App.css';
import { Container, Row, Col } from "react-bootstrap";
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
                <Route
                  path="/"
                  element={
                  <ProtectedRoute>
                    <Home/>
                  </ProtectedRoute>
                } 
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/recipe" element={<Recipe/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/feed" element={<Feed/>} />
                <Route path="/uploadphoto" element={<WebcamCapture/>} />
              </Routes>
            </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
