import React from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cards]) => {
        console.log(userData, cards);
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onEditAvatar = () => {
    props.onEditAvatar(props.onClick);
  };

  const onEditProfile = () => {
    props.onEditProfile(props.onClick);
  };

  const onAddPlace = () => {
    props.onAddPlace(props.onClick);
  };

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <img
            className="profile__avatar-img"
            src={userAvatar}
            alt="Аватар пользователя"
          />
          <div className="profile__overlay" onClick={onEditAvatar} />
        </div>
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              onClick={onEditProfile}
            />
          </div>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        />
      </section>
      <section className="cards">
        {cards.map((card) => (
          <Card
            onCardClick={props.onCardClick}
            card={card}
            key={card._id}
            src={card.link}
            title={card.name}
            like={card.likes}
            owner={card.owner}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
