import React from 'react';
import './NewGoal.css'

function NewGoal(props) {
  function addGoalHandler(event) {
    event.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: "My new Goalllll"
    };

    props.onAddGoal(newGoal);
  };

  return (
    <form className="new-goal-form" onSubmit={addGoalHandler}>
      <input type="text" placeholder="Enter goal title" />
      <button type="submit">Add Goal</button>
    </form >
  );
}

export default NewGoal;
