import React, { useState } from 'react';
import './NewGoal.css'

function NewGoal(props) {
  const [userText, setUserText] = useState('');

  function addGoalHandler(event) {
    event.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: userText
    };

    setUserText('');

    props.onAddGoal(newGoal);
  };

  function textChangeHandler(event) {
    setUserText(event.target.value);
  };

  return (
    <form className="new-goal-form" onSubmit={addGoalHandler}>
      <input
        type="text"
        placeholder="Enter goal title"
        onChange={textChangeHandler}
        value={userText}
      />
      <button type="submit">Add Goal</button>
    </form >
  );
}

export default NewGoal;
