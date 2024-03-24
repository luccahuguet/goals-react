import React from 'react';
import './NewGoal.css'

function NewGoal(props) {
  let userText = '';

  function addGoalHandler(event) {
    event.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: userText
    };

    props.onAddGoal(newGoal);
  };

  function textChangeHandler(event) {
    userText = event.target.value;
  };

  return (
    <form className="new-goal-form" onSubmit={addGoalHandler}>
      <input
        type="text"
        placeholder="Enter goal title"
        onChange={textChangeHandler}
      />
      <button type="submit">Add Goal</button>
    </form >
  );
}

export default NewGoal;
