import React from "react";

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_${props.name} ${props.isOpen && "popup_opened"}`}
    >
      <div className={`popup__container popup__container_${props.name}`}>
        <button
          className={`popup__close-button popup__close-button_${props.name}`}
          type="button"
          onClick={props.onClose}
        ></button>
        <h3 className={`popup__title popup__title_${props.name}`}>
          {props.title}
        </h3>
        <form
          className={`form form_${props.name}`}
          name={props.name}
          noValidate
        >
          {props.children}

          <button
            type="submit"
            className={`form__button form__button_${props.name}`}
          >
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;