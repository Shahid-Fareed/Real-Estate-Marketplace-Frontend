import React from "react";
import { Link } from "react-router-dom";

interface PaginationProps {
  page: any;
  totalPage: any;
}

const Pagination: React.FC<PaginationProps> = ({ page, totalPage }) => {
  const renderPageItem = (
    pageNumber: number,
    label: string,
    disabled?: boolean
  ) => (
    <li className={`page-item${disabled ? "" : ""}`}>
      <Link className="page-link" to="#" aria-label={label}>
        {pageNumber}
      </Link>
    </li>
  );

  const renderPagination = () => {
    const paginationItems = [];

    // Render previous page link
    paginationItems.push(renderPageItem(page - 1, "Previous", page === 1));

    // Render page numbers
    for (let i = 1; i <= totalPage; i++) {
      paginationItems.push(renderPageItem(i, `Page ${i}`, i === page));
    }

    // Render next page link
    paginationItems.push(renderPageItem(page + 1, "Next", page === totalPage));

    return paginationItems;
  };

  return (
    <ul className="pagination rounded-3" style={{ justifyContent: "center" }}>
      {renderPagination()}
    </ul>
  );
};

export default Pagination;
