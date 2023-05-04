import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({
  isOpen,
  onClose,
  onCloseEsc,
  onCloseOverlay,
  onUpdateUser,
  isLoading,
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    if (isOpen) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser, isOpen]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onCloseEsc={onCloseEsc}
      onCloseOverlay={onCloseOverlay}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      buttonText={"Сохранить"}
      buttonTextLoading={"Сохранение..."}
    >
      <input
        className="form__input form__input_profile_name"
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={handleNameChange}
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
        value={description}
        onChange={handleDescriptionChange}
        required
        minLength={2}
        maxLength={200}
        placeholder="О себе"
      />
      <span className="form__input-error job-error" />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
