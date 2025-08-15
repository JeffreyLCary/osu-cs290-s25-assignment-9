import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreateExercisePage';
import EditExercisePage from './pages/EditExercisePage';

function App() {
  
  const [exerciseToEdit, setExerciseToEdit] = useState([]);

  return (
    <>
      <header>
          <h1>Exercise Tracker</h1>
          <p>Database for logging exercises performed</p>
      </header>
      <div className="app">
          <Router>
            <Navigation />
            <Routes>
              <Route path="/" element={<HomePage setExerciseToEdit={setExerciseToEdit} />}></Route>
              <Route path="/create-exercise" element={<CreateExercisePage />}></Route>
              <Route path="/edit-exercise" element={<EditExercisePage exerciseToEdit={exerciseToEdit} />}></Route>
            </Routes>
          </Router>
      </div>
      <footer>
        <p>&copy; 2025 Jeffrey Cary</p>
      </footer>
    </>
  );
};

export default App;
