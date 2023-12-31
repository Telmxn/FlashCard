import "./flashcards.css";

const FlashCards = () => {
  return (
    <>
      <section id="flash-cards">
        <button>Create Card</button>
        <div className="cards-container">
          <div className="card-holder">
            <div className="deck">
              <div className="card">
                <div className="front face">
                  <span className="edit-card">
                    <i className="fa-solid fa-pen"></i>
                  </span>
                  <span className="delete-card">
                    <i className="fa-solid fa-trash"></i>
                  </span>
                  <button className="flip rad-button">Flip me</button>
                </div>
                <div className="back face">
                  <button className="return flip">
                    <i className="fa fa-undo"></i>
                  </button>
                  <span className="edit-card">
                    <i className="fa-solid fa-pen"></i>
                  </span>
                  <span className="delete-card">
                    <i className="fa-solid fa-trash"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="deck">
              <div className="card">
                <div className="front face">
                  <span className="edit-card">
                    <i className="fa-solid fa-pen"></i>
                  </span>
                  <span className="delete-card">
                    <i className="fa-solid fa-trash"></i>
                  </span>
                  <button className="flip rad-button">Flip me</button>
                </div>
                <div className="back face">
                  <button className="return flip">
                    <i className="fa fa-undo"></i>
                  </button>
                  <span className="edit-card">
                    <i className="fa-solid fa-pen"></i>
                  </span>
                  <span className="delete-card">
                    <i className="fa-solid fa-trash"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="deck">
              <div className="card">
                <div className="front face">
                  <span className="edit-card">
                    <i className="fa-solid fa-pen"></i>
                  </span>
                  <span className="delete-card">
                    <i className="fa-solid fa-trash"></i>
                  </span>
                  <button className="flip rad-button">Flip me</button>
                </div>
                <div className="back face">
                  <button className="return flip">
                    <i className="fa fa-undo"></i>
                  </button>
                  <span className="edit-card">
                    <i className="fa-solid fa-pen"></i>
                  </span>
                  <span className="delete-card">
                    <i className="fa-solid fa-trash"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="deck">
              <div className="card">
                <div className="front face">
                  <span className="edit-card">
                    <i className="fa-solid fa-pen"></i>
                  </span>
                  <span className="delete-card">
                    <i className="fa-solid fa-trash"></i>
                  </span>
                  <button className="flip rad-button">Flip me</button>
                </div>
                <div className="back face">
                  <button className="return flip">
                    <i className="fa fa-undo"></i>
                  </button>
                  <span className="edit-card">
                    <i className="fa-solid fa-pen"></i>
                  </span>
                  <span className="delete-card">
                    <i className="fa-solid fa-trash"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="close">&times;</span>
            <h2>Modal Header</h2>
          </div>
          <div className="modal-body">
            <p>Some text in the Modal Body</p>
            <p>Some other text...</p>
          </div>
          <div className="modal-footer">
            <h3>Modal Footer</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashCards;
