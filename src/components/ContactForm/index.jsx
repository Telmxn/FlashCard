import { useRef } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import "./contactForm.css";
import { sendMessage } from "../../store/actions/messageThunk";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.promise(
      dispatch(
        sendMessage({
          id: uuidv4(),
          name: nameRef.current.value,
          email: emailRef.current.value,
          subject: subjectRef.current.value,
          message: messageRef.current.value,
        })
      ),
      {
        pending: "Message is being sent.",
        success: "Message sent.",
        error: "Error has occured.",
      }
    );
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <form onSubmit={handleSubmit}>
        <div className="fields">
          <div className="field name">
            <input type="text" placeholder="Name" required ref={nameRef} />
          </div>
          <div className="field email">
            <input type="email" placeholder="Email" required ref={emailRef} />
          </div>
        </div>
        <div className="field">
          <input type="text" placeholder="Subject" required ref={subjectRef} />
        </div>
        <div className="field textarea">
          <textarea
            cols="30"
            rows="10"
            placeholder="Message.."
            required
            ref={messageRef}
          ></textarea>
        </div>
        <div className="button-area">
          <button type="submit">Send message</button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
