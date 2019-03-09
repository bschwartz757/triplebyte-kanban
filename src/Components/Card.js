import React from 'react';
import './Card.css';

const Card = ({header, text}) => {
  return (
    <div className="todo-card">
      <h1>{header}</h1>
      <article className="card-body">
        <p>{text}</p>
      </article>
    </div>
  )
}

export default Card