import {useState, useEffect} from 'react';
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
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
            onCardClick={onCardClick}
            card={card}
            key={card._id}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
