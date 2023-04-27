import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      buttonText={"Сохранить"}
    >
      <input
        className="form__input form__input_profile_name"
        type="text"
        name="name"
        id="name"
        minLength={2}
        maxLength={40}
        required
        placeholder="Имя"
      />
      <span className="form__input-error name-error" />
      <input
        className="form__input form__input_profile_job"
        type="text"
        name="job"
        id="job"
        required=""
        minLength={2}
        maxLength={200}
        placeholder="О себе"
      />
      <span className="form__input-error job-error" />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
