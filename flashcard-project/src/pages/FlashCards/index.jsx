import { useEffect, useRef, useState } from "react";
import FlashCard from "../../components/FlashCard";
import Modal from "../../components/Modal";
import "./flashcards.css";
import { useDispatch, useSelector } from "react-redux";
import { getCards, updateOrder } from "../../store/actions/flashCardThunk";
import Sortable from "sortablejs";

const FlashCards = () => {
  const dispatch = useDispatch();

  const gridRef = useRef(null);
  const sortableJsRef = useRef(null);

  // const [data, setData] = useState();

  const { cards } = useSelector((state) => state.card);

  useEffect(() => {
    dispatch(getCards());

    sortableJsRef.current = new Sortable(gridRef.current, {
      animation: 150,
      onEnd: onListChange,
    });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [header, setHeader] = useState("Create");

  const handleOpenModal = (h) => {
    setHeader(h);
    setIsModalOpen(true);
  };

  function onListChange() {
    [...gridRef.current.children].map((i, index) => {
      dispatch(updateOrder({ id: i.dataset.id, order: index }));
    });
  }

  return (
    <>
      <section id="flash-cards">
        <button onClick={() => handleOpenModal("Create")}>Create Card</button>
        <div className="cards-container">
          <div className="card-holder" ref={gridRef}>
            {cards?.map((card) => {
              return (
                <FlashCard
                  key={card.id}
                  handleOpenModal={handleOpenModal}
                  {...card}
                />
              );
            })}
          </div>
        </div>
      </section>

      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        header={header}
      />
    </>
  );
};

export default FlashCards;
