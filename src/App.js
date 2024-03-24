// App.js

// import logo from './logo.svg';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import React, { useState } from 'react';

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a project' },
    { id: 3, text: 'Master JavaScript' }
  ]);

  const addNewGoalHandler = newGoal => {
    setCourseGoals(prevGoals => [...prevGoals, newGoal]);
    console.log(courseGoals);
  }

  return (
    <div>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <h2>
        Course Goals
      </h2>
      <GoalList goals={courseGoals} />
    </div>
  );
}

export default App;
