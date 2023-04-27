import React from "react";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <article className="card">
      <button className="card__delete" type="button" />
      <img
        className="card__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="card__group">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like">
          <button className="card__button-like" type="button" />
          <div className="card__number-like">{card.likes.length}</div>
        </div>
      </div>
    </article>
  );
}
export default Card;