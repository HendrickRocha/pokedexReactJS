import React from "react";
import "../styles/Pagination.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Pagination = (props) => {
  const { page, totalPages, onPreviousClick, onNextClick } = props;
  return (
    <div className="pagination-container">
      <button className="pagination-btn" onClick={onPreviousClick}>
        <div>
          <FaAngleLeft />
        </div>
      </button>

      <div>
        {page} de {totalPages}
      </div>

      <button className="pagination-btn" onClick={onNextClick}>
        <div>
          <FaAngleRight />
        </div>
      </button>
    </div>
  );
};

export default Pagination;
