import React, { useState } from "react";
// import DataNotFound from "../../assets/images/404-error.png";
import Actions from "./Actions";
import Pagination from "./Pagination";

const Table = ({
    columns,
    data,
    itemsPerPage,
    setItemsPerPage,
    onDelete,
    onEdit,
    isAction,
    permEdit, permDel,
}: any) => {
   
    const [sortedColumn, setSortedColumn] = useState<string | null>(null);
    const [sortDirection, setSortDirection] = useState("asc");
    const [currentPage, setCurrentPage] = useState(1);

    const handleSort = (column: any) => {
        if (column === sortedColumn) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortedColumn(column);
            setSortDirection("asc");
        }
    };

    const sortedData = data.sort((a: any, b: any) => {
        const valueA = sortedColumn ? a[sortedColumn] : null;
        const valueB = sortedColumn ? b[sortedColumn] : null;

        if (typeof valueA === "string" && typeof valueB === "string") {
            // Use localeCompare for string comparison
            return sortDirection === "asc"
                ? valueA.localeCompare(valueB)
                : valueB.localeCompare(valueA);
        } else {
            // Use standard comparison for numbers or other types
            return sortDirection === "asc" ? valueA - valueB : valueB - valueA;
        }
    });

    // Calculate pagination variables
    const totalPages = Math.ceil(sortedData.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

    // Handle page changes
    const handlePageChange = (pageNumber: any) => {
        setCurrentPage(pageNumber);
    };

    const handleDelete = (id: any) => {
        onDelete(id);
    };
    const handleEdit = (id: any) => {
        onEdit(id);
    };

    return (
        <>
            {data.length === 0 ? (
                <>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center">
                                <div>
                                    <div className="row justify-content-center">
                                        <div className="col-sm-4">
                                            <div className="error-img">
                                                <img
                                                    // src={DataNotFound}
                                                    src=""
                                                    alt=""
                                                    className="img-fluid mx-auto d-block"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h4 className="text-uppercase mt-4">Sorry, No Data found</h4>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="d-flex" style={{ alignItems: "center" }}>
                        <div className="row w-30 mb-3">
                            <div
                                className="col-2"
                                style={{
                                    justifyContent: "center",
                                    alignContent: "center !important",
                                }}
                            >
                                <label
                                    style={{
                                        fontWeight: "normal",
                                        whiteSpace: "nowrap",
                                        width: "150px",
                                        alignItems: "center",
                                    }}
                                >
                                    Show :
                                </label>
                            </div>

                            <div className="col-5">
                                <select
                                    className="form-select form-select-sm"
                                    value={itemsPerPage}
                                    onChange={(e) => setItemsPerPage(e.target.value)}
                                    defaultValue="10"
                                >
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-centered table-nowrap mb-0">
                            <thead className="table-light">
                                <tr>
                                    {columns.map((column: any) => (
                                        <th
                                            key={column}
                                            onClick={() => handleSort(column)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            {column}
                                        </th>
                                    ))}
                                    {
                                        isAction && <th>Actions</th>
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((row: any, index: any) => (
                                    <tr key={index}>
                                        {columns.map((column: any) => (
                                            <td key={column}>{row[column]}</td>
                                        ))}
                                         {
                                        isAction && <td>
                                        <Actions
                                            row={row}
                                            onDelete={() => handleDelete(row.id)}
                                            onEdit={() => handleEdit(row.id)}
                                            permEdit={permEdit}
                                            permDel={permDel}
                                        />
                                    </td>
                                    }
                                       
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {totalPages > 1 && (
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        )}
                    </div>
                </>
            )}
        </>
    );
};

export default Table;
