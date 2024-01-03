import { useEffect, useRef, useState } from "react";
import FlashCard from "../../components/FlashCard";
import Modal from "../../components/Modal";
import "./flashcards.css";
import { useDispatch, useSelector } from "react-redux";
import { getCards, updateOrder } from "../../store/actions/flashCardThunk";
import Sortable from "sortablejs";
import React from "react";

const FlashCards = () => {
  const dispatch = useDispatch();

  const gridRef = useRef(null);
  const sortableJsRef = useRef(null);

  const [searchedCards, setSearchedCards] = useState();
  const searchRef = useRef();

  const { cards } = useSelector((state) => state.card);
  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardSelection = (cardId) => {
    setSelectedCards((prevSelected) => {
      if (prevSelected.includes(cardId)) {
        return prevSelected.filter((id) => id !== cardId);
      } else {
        return [...prevSelected, cardId];
      }
    });
  };

  const generateJSONForSelectedCards = () => {
    const selectedCardData = cards.filter((card) =>
      selectedCards.includes(card.id)
    );

    const jsonData = selectedCardData.map((card) => ({
      id: card.id,
      text: card.text,
      question: card.question,
      image: card.image,
      answer: card.answer,
      description: card.description,
      answerImage: card.answerImage,
      status: card.status,
      dateTime: card.dateTime,
    }));

    return JSON.stringify(jsonData, null, 2);
  };

  const sendEmailWithJSON = () => {
    const jsonContent = generateJSONForSelectedCards();

    const mailtoLink = `mailto:?subject=FlashCards&body=${encodeURIComponent(
      jsonContent
    )}`;
    window.location.href = mailtoLink;
  };

  useEffect(() => {
    dispatch(getCards({ sort: "_sort=dateTime&_order=asc" }));
  }, []);
  useEffect(() => {
    if (!searchedCards) {
      sortableJsRef.current = new Sortable(gridRef.current, {
        animation: 150,
        onEnd: onListChange,
      });
    }
  }, [searchedCards]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [header, setHeader] = useState("Create");

  const handleOpenModal = (h) => {
    setHeader(h);
    setIsModalOpen(true);
  };

  function onListChange() {
    if (!searchRef.current.value) {
      [...gridRef.current.children].map((i, index) => {
        dispatch(updateOrder({ id: i.dataset.id, order: index }));
      });
    }
  }

  const [updateCard, setUpdateCard] = useState();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = searchRef.current.value;
    const res = cards.filter((card) => {
      if (
        card.text.includes(searchText) ||
        card.question.includes(searchText) ||
        card.answer.includes(searchText) ||
        card.description.includes(searchText)
      ) {
        return card;
      }
    });
    if (!searchText) {
      setSearchedCards();
    } else {
      setSearchedCards(res);
    }
    handleFilter(res);
  };

  const filterRef = useRef();

  const [filteredCards, setFilteredCards] = useState();

  const handleFilter = (searched) => {
    const res = searched
      ? searched.filter((card) => {
          if (card.status.includes(filterRef.current.value)) {
            return card;
          }
        })
      : cards.filter((card) => {
          if (card.status == filterRef.current.value) {
            return card;
          }
        });

    if (filterRef.current.value == "All") {
      if (searched) {
        setFilteredCards(searched);
      } else {
        setFilteredCards(cards);
      }
    } else {
      setFilteredCards(res);
    }
  };

  const sortRef = useRef();

  const handleSort = () => {
    console.log(sortRef.current.value);
    dispatch(
      getCards({
        sort: `_sort=${sortRef.current.value.split("_")[0]}&_order=${
          sortRef.current.value.split("_")[1]
        }`,
      })
    );
  };

  return (
    <>
      <section id="flash-cards">
        <div className="topPart">
          <form className="searchPart" onSubmit={handleSearch}>
            <input type="search" placeholder="Search..." ref={searchRef} />
            <button type="submit">Search</button>
          </form>
          <select onChange={() => handleFilter(searchedCards)} ref={filterRef}>
            <option value="All">All</option>
            <option value="Learned">Learned</option>
            <option value="Want to Learn">Want to Learn</option>
            <option value="Noted">Noted</option>
          </select>
          <select onChange={handleSort} ref={sortRef}>
            <option value="dateTime_asc">By Time asc</option>
            <option value="dateTime_desc">By Time desc</option>
            <option value="order_asc">By Order asc</option>
            <option value="order_desc">By Order desc</option>
          </select>
          {selectedCards.length > 0 && (
            <button onClick={sendEmailWithJSON}>Share</button>
          )}
          <button onClick={() => handleOpenModal("Create")}>Create Card</button>
        </div>
        <div className="cards-container">
          <div className="card-holder" ref={gridRef}>
            {searchedCards
              ? filteredCards?.map((card) => {
                  return (
                    <FlashCard
                      key={card.id}
                      handleOpenModal={handleOpenModal}
                      setUpdateCard={setUpdateCard}
                      isSelected={selectedCards.includes(card.id)}
                      handleCardSelection={handleCardSelection}
                      {...card}
                    />
                  );
                })
              : filteredCards
              ? filteredCards?.map((card) => {
                  return (
                    <FlashCard
                      key={card.id}
                      handleOpenModal={handleOpenModal}
                      setUpdateCard={setUpdateCard}
                      isSelected={selectedCards.includes(card.id)}
                      handleCardSelection={handleCardSelection}
                      {...card}
                    />
                  );
                })
              : cards?.map((card) => {
                  return (
                    <FlashCard
                      key={card.id}
                      handleOpenModal={handleOpenModal}
                      setUpdateCard={setUpdateCard}
                      isSelected={selectedCards.includes(card.id)}
                      handleCardSelection={handleCardSelection}
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
        setUpdateCard={setUpdateCard}
        handleSort={handleSort}
        {...updateCard}
      />
    </>
  );
};

export default FlashCards;
