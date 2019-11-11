import React, { useState } from "react";
import { Pagination } from "carbon-components-react";

import Table from "../../components/Tables";
import TableToolBar from "../../components/TableToolBar";
import PageHeader from "../../components/PageHeader";
import db from "../../db/db";

const DetailsPage = () => {
  let { headers, rows } = db;

  const [totalItems] = useState(20);
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);
  const [toggled, setToggle] = useState(false);

  return (
    <div className="details-page">
      <div className="">
        <PageHeader title="Details" />
      </div>

      <div className="table-component__container">
        <TableToolBar handleToggle={setToggle} toggle={toggled} />
        <Table
          headers={headers}
          rows={rows.slice(firstRowIndex, firstRowIndex + currentPageSize)}
          toggle={toggled}
          scrollable
          sticky
        />

        <Pagination
          // className="pagination--sticky"
          totalItems={totalItems}
          backwardText="Previous page"
          forwardText="Next page"
          pageSize={currentPageSize}
          pageSizes={[5, 10, 15, 25]}
          itemsPerPageText="Items per page"
          onChange={({ page, pageSize }) => {
            if (pageSize !== currentPageSize) {
              setCurrentPageSize(pageSize);
            }
            setFirstRowIndex(pageSize * (page - 1));
          }}
        />
      </div>
    </div>
  );
};

export default DetailsPage;
