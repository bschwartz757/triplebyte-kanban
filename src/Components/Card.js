import React from 'react';
import './Card.css';

export const TodoCard = ({ text }) => {
  return (
    <div className="card todo-card">
      <article>
        <p>{text}</p>
      </article>
    </div>
  );
};

export const HeaderCard = ({ text }) => {
  return (
    <div className="card header-card">
      <h1>{text}</h1>
    </div>
  );
};

export const AddTodo = props => {
  const { 'data-ref': ref, onClick } = props;
  return (
    <div className="add-container">
      <button
        type="button"
        className="add-container__button"
        onClick={() => onClick(ref)}
      >
        + Add Todo
      </button>
    </div>
  );
};
