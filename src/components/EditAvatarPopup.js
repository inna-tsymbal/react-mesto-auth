import { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({
  isOpen,
  onClose,
  onCloseEsc,
  onCloseOverlay,
  onUpdateAvatar,
  isLoading,
}) {
  const ref = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: ref.current.value,
    });
  }

  useEffect(() => {
    ref.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onCloseEsc={onCloseEsc}
      onCloseOverlay={onCloseOverlay}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      buttonText={"Обновить"}
      buttonTextLoading={"Обновление..."}
    >
      <input
        className="form__input form__input_avatar_link"
        type="url"
        name="avatar"
        id="avatar"
        minLength={2}
        ref={ref}
        required
        placeholder="Ссылка на картинку"
      />
      <span className="form__input-error avatar-error" />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
