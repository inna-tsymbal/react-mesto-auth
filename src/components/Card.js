import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="card">
      <button className="card__delete" type="button" />
      <img
        className="card__image"
        src={props.src}
        alt={props.title}
        onClick={handleClick}
      />
      <div className="card__group">
        <h2 className="card__title">{props.title}</h2>
        <div className="card__like">
          <button className="card__button-like" type="button" />
          <div className="card__number-like">{props.like.length}</div>
        </div>
      </div>
    </article>
  );
}
export default Card;
