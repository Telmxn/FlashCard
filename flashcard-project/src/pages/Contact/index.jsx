import "./contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="contact-content">
          <div className="column left">
            <div className="text">Get in Touch</div>
            <p>
              If you are interested in working together? Please fill out the
              form aside with some info about your project and I will get back
              to you as soon as I can. Please allow a couple days for me to
              respond.
            </p>
            <div className="icons">
              <div className="row">
                <i className="fas fa-user"></i>
                <div className="info">
                  <div className="head">Name</div>
                  <div className="sub-title">Murad Jafarov</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-map-marker-alt"></i>
                <div className="info">
                  <div className="head">Address</div>
                  <div className="sub-title">Baku, Azerbaijan</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-envelope"></i>
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title">murad.ceferov.19781@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="column right">
            <div className="text">Message me</div>
            <form action="#">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
