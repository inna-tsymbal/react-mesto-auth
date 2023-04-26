import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose}) {
  return (
    <PopupWithForm
      name="card"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      buttonText={"Создать"}
    >
      <input
        className="form__input form__input_card_name"
        type="text"
        name="title"
        id="title"
        minLength={2}
        maxLength={30}
        required
        placeholder="Название"
      />
      <span className="form__input-error title-error" />
      <input
        className="form__input form__input_card_link"
        type="url"
        name="link"
        id="link"
        minLength={2}
        required
        placeholder="Ссылка на картинку"
      />
      <span className="form__input-error link-error" />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
