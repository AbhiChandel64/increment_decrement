import { useEffect, useState } from "react";

import "./Pagination.css";

const getNavigations = (total, selected, onPageChange) => {
  return [...Array(total).keys()].map((item) => (
    <div
      className={item + 1 === selected ? "btn selected" : "btn"}
      onClick={() => onPageChange(item + 1)}
    >
      [{item + 1}]
    </div>
  ));
};

export const Pagination = ({ total, selected, onPageChange }) => {
  const [totalPages, setTotalPages] = useState(total);
  const [selectedPage, setSelectedPage] = useState(total);

  useEffect(() => {
    setTotalPages(total);
    setSelectedPage(selected);
  }, [selected, total]);

  return (
    <>
      <div>Selected Page {selected}</div>

      <div className="pageContainer">
        <div
          className={selected === 1 ? "btn disabled" : "btn"}
          onClick={() => onPageChange(selected === 1 ? selected : selected - 1)}
        >
          {`[<]`}
        </div>
        {getNavigations(totalPages, selectedPage, onPageChange)}
        <div
          className={selected === totalPages ? "btn disabled" : "btn"}
          onClick={() =>
            onPageChange(selected === totalPages ? selected : selected + 1)
          }
        >
          {`[>]`}
        </div>
      </div>
    </>
  );
};
