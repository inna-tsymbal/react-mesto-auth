function ImagePopup(props) {
  return (
    <div
      className={`popup popup_image ${props.card.link ? "popup_opened" : ""}`}
    >
      <div className="popup__container popup__container_image">
        <button
          className="popup__close-button popup__close-button_image"
          type="button"
          onClick={props.onClose}
        />
        <img
          className="popup__picture"
          src={props.card.link}
          alt={props.card.name}
        />
        <p className="popup__picture-title">{props.card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;


