import React from "react";

function PopupWithForm({title, name, isOpen, onClose, buttonText, children}) {
  return (
    <div
      className={`popup ${isOpen && "popup_opened"}`}
    >
      <div className={`popup__container popup__container_${name}`}>
        <button
          className='popup__close-button'
          type="button"
          onClick={onClose}
        ></button>
        <h3 className='popup__title'>
          {title}
        </h3>
        <form
          className={`form form_${name}`}
          name={name}
          noValidate
        >
          {children}

          <button
            type="submit"
            className={`form__button form__button_${name}`}
          >
            {buttonText || 'Сохранить'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;