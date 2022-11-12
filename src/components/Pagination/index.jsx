import { CustomPaginate } from './styled';

const Paginate = ({ handlePageClick, itemsPerPage, pageCount }) => {
  return (
    <CustomPaginate
      previousLabel="<"
      nextLabel=">"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      pageCount={pageCount}
      pageRangeDisplayed={itemsPerPage}
      onPageChange={handlePageClick}
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link-prev"
      nextClassName="page-item"
      nextLinkClassName="page-link-next"
      activeClassName="active"
      className="pagination-container"
      hrefAllControls
    />
  );
};

export default Paginate;
