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

  const [searchedCards, setSearchedCards] = useState();
  const searchRef = useRef();

  const { cards } = useSelector((state) => state.card);

  const cardsPerPage = 12;
  const [displayedCards, setDisplayedCards] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(cardsPerPage);

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

  useEffect(() => {
    if (searchedCards) {
      if (searchedCards.length > 0) {
        if (startIndex < searchedCards.length) {
          setDisplayedCards((prev) => [
            ...prev,
            ...searchedCards.slice(startIndex, endIndex),
          ]);
        }
      }
    } else if (filteredCards) {
      if (filteredCards.length > 0) {
        if (startIndex < filteredCards.length) {
          setDisplayedCards((prev) => [
            ...prev,
            ...filteredCards.slice(startIndex, endIndex),
          ]);
        }
      }
    } else {
      if (cards.length > 0) {
        if (startIndex < cards.length) {
          setDisplayedCards((prev) => [
            ...prev,
            ...cards.slice(startIndex, endIndex),
          ]);
        }
      }
    }
  }, [cards, startIndex, endIndex]);

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

  const [isLoading, setIsLoading] = useState(false);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5 && !isLoading) {
      setIsLoading(true);
      setTimeout(() => {
        setStartIndex(endIndex);
        setEndIndex(endIndex + cardsPerPage);
        setIsLoading(false);
      }, 1000); // Simulated delay
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll());
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [startIndex, endIndex, isLoading]);

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
                      handleSort={handleSort}
                      {...card}
                    />
                  );
                })
              : filteredCards
              ? filteredCards?.map((card) => {
                  console.log("Filter");
                  return (
                    <FlashCard
                      key={card.id}
                      handleOpenModal={handleOpenModal}
                      setUpdateCard={setUpdateCard}
                      handleSort={handleSort}
                      {...card}
                    />
                  );
                })
              : displayedCards?.map((card) => {
                  return (
                    <FlashCard
                      key={card.id}
                      handleOpenModal={handleOpenModal}
                      setUpdateCard={setUpdateCard}
                      handleSort={handleSort}
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
