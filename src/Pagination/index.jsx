import React from 'react';
import ReactPaginate from 'react-paginate';

export const Pagination = ({ value, onChangePage }) => {
  return (
    <ReactPaginate
      className="pagination"
      breakLabel="..."
      nextLabel=" > "
      onPageChange={(event) => onChangePage(event.selected + 1)}
      // рендерить кол-во товаров на странице
      pageRangeDisplayed={9}
      // кол-во страниц
      pageCount={2}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
