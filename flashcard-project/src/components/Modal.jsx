/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { createCard, updateCard } from "../store/actions/flashCardThunk";
import moment from "moment";

const Modal = ({
  isModalOpen,
  setIsModalOpen,
  header,
  setUpdateCard,
  handleSort,
  id,
  text,
  question,
  answer,
  description,
}) => {
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

    if (header == "Create") {
      dispatch(
        createCard({
          text: shortTextRef.current.value,
          question: questionRef.current.value,
          image: questionImageRef.current.files[0]
            ? URL.createObjectURL(questionImageRef.current.files[0])
            : "",
          answer: answerRef.current.value,
          description: answerTextRef.current.value,
          answerImage: answerImageRef.current.files[0]
            ? URL.createObjectURL(answerImageRef.current.files[0])
            : "",
          dateTime: moment().format("DD-MM-YYYY hh:mm:ss"),
          status: "Want to Learn",
        })
      );
    } else if (header == "Edit") {
      dispatch(
        updateCard({
          id: id,
          text: shortTextRef.current.value,
          question: questionRef.current.value,
          image: questionImageRef.current.files[0]
            ? URL.createObjectURL(questionImageRef.current.files[0])
            : "",
          answer: answerRef.current.value,
          description: answerTextRef.current.value,
          answerImage: answerImageRef.current.files[0]
            ? URL.createObjectURL(answerImageRef.current.files[0])
            : "",
          dateTime: moment().format("DD-MM-YYYY hh:mm:ss"),
        })
      );
      setUpdateCard();
    }
    setIsModalOpen(false);
    setTimeout(() => {
      handleSort();
    }, 500);
  };

  useEffect(() => {
    if (header == "Edit") {
      shortTextRef.current.value = text;
      questionRef.current.value = question;
      answerRef.current.value = answer;
      answerTextRef.current.value = description;
      questionImageRef.current.value = "";
      answerImageRef.current.value = "";
    } else if (header == "Create") {
      shortTextRef.current.value = "";
      questionRef.current.value = "";
      questionImageRef.current.value = "";
      answerRef.current.value = "";
      answerTextRef.current.value = "";
      answerImageRef.current.value = "";
    }
  }, [id, header]);

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
