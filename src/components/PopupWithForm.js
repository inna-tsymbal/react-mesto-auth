import { useEffect } from "react";

function PopupWithForm({
  title,
  name,
  isOpen,
  onClose,
  onCloseEsc,
  onCloseOverlay,
  onSubmit,
  isLoading,
  buttonText,
  buttonTextLoading,
  children,
}) {
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", onCloseEsc);
    } else {
      document.removeEventListener("keydown", onCloseEsc);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", onCloseOverlay);
    } else {
      document.removeEventListener("mousedown", onCloseOverlay);
    }
  }, [isOpen]);

  return (
    <div className={`popup ${isOpen && "popup_opened"}`}>
      <div className={`popup__container popup__container_${name}`}>
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="popup__title">{title}</h3>
        <form
          className={`form form_${name}`}
          name={name}
          noValidate
          onSubmit={onSubmit}
        >
          {children}
          <button type="submit" className={`form__button form__button_${name}`}>
            {isLoading ? buttonTextLoading : buttonText || "Сохранить"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
