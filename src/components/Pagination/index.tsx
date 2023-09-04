import React from "react";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { StyledPagination } from "./style";

const Pagination = ({ setCurrentPage, currentPage, maxPages }) => {
  return (
    <StyledPagination className="pagination-btn-box">
      <button
        disabled={currentPage == 1}
        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
      >
        <MdOutlineKeyboardDoubleArrowLeft />
      </button>
      {currentPage > 4 && (
        <>
          <p className="page-nav" onClick={() => setCurrentPage(1)}>
            {1}
          </p>
          <p
            className="page-nav  current-page no-hover"
            style={{ margin: "0 -5px 0 -10px" }}
          >
            ...
          </p>
        </>
      )}
      {currentPage - 6 > 0 && maxPages - currentPage < 1 && currentPage > 1 && (
        <p
          className="page-nav"
          onClick={() => {
            setCurrentPage(currentPage - 6);
          }}
        >
          {currentPage - 6}
        </p>
      )}
      {currentPage - 5 > 0 && maxPages - currentPage < 2 && currentPage > 2 && (
        <p
          className="page-nav"
          onClick={() => {
            setCurrentPage(currentPage - 5);
          }}
        >
          {currentPage - 5}
        </p>
      )}
      
      {currentPage - 4 > 0 && maxPages - currentPage < 3 && currentPage > 3 && (
        <p
          className="page-nav"
          onClick={() => {
            setCurrentPage(currentPage - 4);
          }}
        >
          {currentPage - 4}
        </p>
      )}
      {currentPage > 3 && (
        <p
          className="page-nav"
          onClick={() => {
            setCurrentPage(currentPage - 3);
          }}
        >
          {currentPage - 3}
        </p>
      )}
      {currentPage - 2 > 0 && currentPage > 2 && (
        <p
          className="page-nav"
          onClick={() => {
            setCurrentPage(currentPage - 2);
          }}
        >
          {currentPage - 2}
        </p>
      )}
      {currentPage - 1 > 0 && currentPage > 1 && (
        <p
          className="page-nav"
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
        >
          {currentPage - 1}
        </p>
      )}
      <p className="page-nav current-page blue">{currentPage}</p>
      {currentPage < maxPages && (
        <p
          className="page-nav"
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
        >
          {currentPage + 1}
        </p>
      )}
      {currentPage < maxPages - 1 && (
        <p
          className="page-nav"
          onClick={() => {
            setCurrentPage(currentPage + 2);
          }}
        >
          {currentPage + 2}
        </p>
      )}
      {currentPage < maxPages - 2 && (
        <p
          className="page-nav"
          onClick={() => {
            setCurrentPage(currentPage + 3);
          }}
        >
          {currentPage + 3}
        </p>
      )}
      {currentPage < 3 && currentPage < maxPages - 3 && (
        <p
          className="page-nav"
          onClick={() => {
            setCurrentPage(currentPage + 4);
          }}
        >
          {currentPage + 4}
        </p>
      )}
      {currentPage < 4 &&
        currentPage < maxPages - 4 &&
        (currentPage == 3 ? (
          <p
            className="page-nav"
            onClick={() => {
              setCurrentPage(7);
            }}
          >
            7
          </p>
        ) : (
          <p
            className="page-nav"
            onClick={() => {
              setCurrentPage(currentPage + 5);
            }}
          >
            {currentPage + 5}
          </p>
        ))}
      {currentPage < 2 && currentPage < maxPages - 5 && (
        <p
          className="page-nav"
          onClick={() => {
            setCurrentPage(currentPage + 6);
          }}
        >
          {currentPage + 6}
        </p>
      )}
      {currentPage < maxPages - 3 && (
        <>
          <p
            className="page-nav current-page  no-hover"
            style={{ margin: "0 -10px 0 -5px" }}
          >
            ...
          </p>
          <p className="page-nav" onClick={() => setCurrentPage(maxPages)}>
            {maxPages}
          </p>
        </>
      )}
      <button
        disabled={currentPage >= maxPages}
        onClick={() => {
          setCurrentPage(currentPage + 1)
        }}
      >
        <MdOutlineKeyboardDoubleArrowRight />
      </button>
    </StyledPagination>
  );
};

export default Pagination;