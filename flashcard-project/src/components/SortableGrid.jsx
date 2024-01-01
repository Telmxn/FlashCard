import { useState, useEffect, useRef } from "react";
import Sortable from "sortablejs";

const initData = Array.from({ length: 15 }, (_, i) => ({
  _id: (i + 1).toString(),
  content: (i + 1).toString(),
}));

const SortableGrid = () => {
  const gridRef = useRef(null);
  const sortableJsRef = useRef(null);

  const [data, setData] = useState(
    JSON.parse(sessionStorage.getItem("my-grid")) || initData
  );

  const onListChange = () => {
    const newData = [...gridRef.current.children]
      .map((i) => i.dataset.id)
      .map((id) => data.find((item) => item._id === id));

    sessionStorage.setItem("my-grid", JSON.stringify(newData));
    setData(data);
  };

  useEffect(() => {
    sortableJsRef.current = new Sortable(gridRef.current, {
      animation: 150,
      onEnd: onListChange,
    });
  }, []);

  return (
    <div ref={gridRef}>
      {data.map(({ _id, content }) => (
        <div key={_id} data-id={_id} className="grid-square">
          {content}
        </div>
      ))}
    </div>
  );
};

export default SortableGrid;
