/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { createCard } from "../store/actions/flashCardThunk";
import moment from "moment";

const Modal = ({ isModalOpen, setIsModalOpen, header, id }) => {
  const [isQuestion, setIsQuestion] = useState(true);
  const [isAnswerQuestion, setIsAnswerQuestion] = useState(true);

  const shortTextRef = useRef();
  const questionRef = useRef();
  const questionImageRef = useRef();
  const answerRef = useRef();
  const answerTextRef = useRef();
  const answerImageRef = useRef();

  const handleClose = (e) => {
    if (e.target.id == "myModal") {
      setIsModalOpen(false);
    }
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id) {
      dispatch(
        createCard({
          text: shortTextRef.current.value,
          question: questionRef.current.value,
          image: questionImageRef.current.value,
          answer: answerRef.current.value,
          description: answerTextRef.current.value,
          answerImage: answerImageRef.current.value,
          dateTime: moment().format("DD-MM-YYYY hh:mm:ss"),
          status: "Want to Learn",
        })
      );
    }
    setIsModalOpen(false);
  };

  return (
    <div
      id="myModal"
      className={`${isModalOpen ? "open" : ""} modal`}
      onClick={handleClose}
    >
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={() => setIsModalOpen(false)}>
            &times;
          </span>
          <h2>{header}</h2>
        </div>
        <form className="modal-body" onSubmit={handleSubmit}>
          <h4>Question</h4>
          <div>
            <input type="text" placeholder="Short text..." ref={shortTextRef} />
          </div>

          <label>
            <input
              type="radio"
              name="option"
              defaultChecked
              onClick={() => setIsQuestion(true)}
            />{" "}
            Text
          </label>
          <label>
            <input
              type="radio"
              name="option"
              onClick={() => setIsQuestion(false)}
            />{" "}
            Image
          </label>

          <div className={`${isQuestion ? "active" : ""} tab-content`}>
            <textarea
              placeholder="Enter question..."
              ref={questionRef}
            ></textarea>
          </div>
          <div className={`${isQuestion ? "" : "active"} tab-content`}>
            <input type="file" accept="image/*" ref={questionImageRef} />
          </div>
          <h4>Answer</h4>
          <div>
            <input type="text" placeholder="Answer..." ref={answerRef} />
          </div>

          <label>
            <input
              type="radio"
              name="option2"
              defaultChecked
              onClick={() => setIsAnswerQuestion(true)}
            />{" "}
            Text
          </label>
          <label>
            <input
              type="radio"
              name="option2"
              onClick={() => setIsAnswerQuestion(false)}
            />{" "}
            Image
          </label>

          <div className={`${isAnswerQuestion ? "active" : ""} tab-content`}>
            <textarea
              placeholder="Enter about the answer..."
              ref={answerTextRef}
            ></textarea>
          </div>
          <div className={`${isAnswerQuestion ? "" : "active"} tab-content`}>
            <input type="file" accept="image/*" ref={answerImageRef} />
          </div>
          <button type="submit">{header}</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
