/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateStatus } from "../store/actions/flashCardThunk";

const FlashCard = ({
  handleOpenModal,
  id,
  text,
  question,
  image,
  answer,
  description,
  answerImage,
  // dateTime,
  status,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const dispatch = useDispatch();

  const handleFlip = (e) => {
    if (
      e.target instanceof HTMLButtonElement ||
      e.target.classList.contains("fa-solid")
    ) {
      return;
    } else {
      setIsFlipped((prev) => !prev);
    }
  };

  const handleStatus = (e) => {
    dispatch(updateStatus({ id: id, status: e.target.value }));
  };

  const statuses = ["Learned", "Want to Learn", "Noted"];

  return (
    <div
      data-id={id}
      className={`${isFlipped ? "flipped" : ""} card`}
      onClick={handleFlip}
      id={`product-${id}`}
    >
      <button className="edit-card" onClick={() => handleOpenModal("Edit")}>
        <i className="fa-solid fa-pen"></i>
      </button>
      <button className="delete-card">
        <i className="fa-solid fa-trash"></i>
      </button>
      <div className="front face">
        <h3>{text}</h3>
        {image ? <img src={image} alt={text} /> : <p>{question}</p>}
      </div>
      <div className="back face">
        <h3>{answer}</h3>
        {answerImage ? (
          <img src={answerImage} alt={answer} />
        ) : (
          <p>{description}</p>
        )}
        <div className="status">
          {statuses.map((st) => {
            if (st == status) {
              return (
                <label key={`${id}-${st}`}>
                  <input
                    type="radio"
                    name={`status-${id}`}
                    defaultChecked
                    value={st}
                    onClick={handleStatus}
                  />
                  {st}
                </label>
              );
            } else {
              return (
                <label key={`${id}-${st}`}>
                  <input
                    type="radio"
                    name={`status-${id}`}
                    value={st}
                    onClick={handleStatus}
                  />
                  {st}
                </label>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
