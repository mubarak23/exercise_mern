import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
//import {Navbar} from './components/Navbar-component';
import ExerciseList from './components/ExerciseList';
import MainNavbar from './components/MainNavbar';
import EditExercise from './components/EditExercise';
import CreateExercise from './components/CreateExercise';
import CreateUser from './components/CreateUser';
function App() {
  return (
    <Router>
      <div className="container">
      <MainNavbar/>
      <Route path="/" exact component={ExerciseList}/>
      <Route path="/createxercise" exact component={CreateExercise}/>
      <Route path="/createuser" exact component={CreateUser}/>
      <Route path="/editexercise" exact component={EditExercise}/>
      </div>
    </Router>
  );
}

export default App;
