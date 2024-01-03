/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCard, updateStatus } from "../store/actions/flashCardThunk";

const FlashCard = ({
  handleOpenModal,
  setUpdateCard,
  handleSort,
  id,
  text,
  question,
  image,
  answer,
  description,
  answerImage,
  status,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const dispatch = useDispatch();

  const handleFlip = (e) => {
    if (
      e.target instanceof HTMLButtonElement ||
      e.target.classList.contains("fa-solid") ||
      e.target instanceof HTMLInputElement
    ) {
      return;
    } else {
      setIsFlipped((prev) => !prev);
    }
  };

  const handleStatus = (e) => {
    dispatch(updateStatus({ id: id, status: e.target.value }));
    handleSort();
  };

  const statuses = ["Learned", "Want to Learn", "Noted"];

  const handleEdit = () => {
    handleOpenModal("Edit");
    setUpdateCard({
      id: id,
      text: text,
      question: question,
      image: image,
      answer: answer,
      description: description,
      answerImage: answerImage,
    });
  };

  const handleDelete = () => {
    if (confirm("Are you sure?")) {
      dispatch(deleteCard({ id: id }));
    }
  };

  return (
    <div
      data-id={id}
      className={`${isFlipped ? "flipped" : ""} card`}
      onClick={handleFlip}
      id={`product-${id}`}
    >
      <button className="edit-card" onClick={handleEdit}>
        <i className="fa-solid fa-pen"></i>
      </button>
      <button className="delete-card" onClick={handleDelete}>
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
