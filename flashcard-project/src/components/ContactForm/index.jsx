import "./contactForm.css";

const ContactForm = () => {
  return (
    <form>
      <div className="fields">
        <div className="field name">
          <input type="text" placeholder="Name" required />
        </div>
        <div className="field email">
          <input type="email" placeholder="Email" required />
        </div>
      </div>
      <div className="field">
        <input type="text" placeholder="Subject" required />
      </div>
      <div className="field textarea">
        <textarea
          cols="30"
          rows="10"
          placeholder="Message.."
          required
        ></textarea>
      </div>
      <div className="button-area">
        <button type="submit">Send message</button>
      </div>
    </form>
  );
};

export default ContactForm;
