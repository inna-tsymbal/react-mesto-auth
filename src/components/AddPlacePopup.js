import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({
  isOpen,
  onClose,
  onCloseEsc,
  onCloseOverlay,
  onAddPlace,
  isLoading,
}) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    if (isOpen) {
      setTitle("");
      setLink("");
    }
  }, [isOpen]);

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: title,
      link,
    });
  }

  return (
    <PopupWithForm
      name="card"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onCloseEsc={onCloseEsc}
      onCloseOverlay={onCloseOverlay}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      buttonText={"Создать"}
      buttonTextLoading={"Создание..."}
    >
      <input
        className="form__input form__input_card_name"
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={handleTitleChange}
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
        value={link}
        onChange={handleLinkChange}
        minLength={2}
        required
        placeholder="Ссылка на картинку"
      />
      <span className="form__input-error link-error" />
    </PopupWithForm>
  );
}

export default AddPlacePopup;