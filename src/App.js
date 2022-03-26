import './App.css';
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route, } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
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
              </Routes>
            </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
