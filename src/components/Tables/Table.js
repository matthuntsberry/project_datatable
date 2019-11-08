import React from "react";
import Cell from "./Cell";
import classNames from "classnames";

const Table = ({ rows, headers, scrollable, sticky }) => {
  const renderHeadingRow = (header, headerIndex) => {
    return (
      <Cell
        content={header}
        header={true}
        sticky={sticky}
        headerIndex={headerIndex}
      />
    );
  };

  const theadMarkup = (
    // passing header index to keep track of first column
    // for position: sticky
    <tr role="row" className="table-col__header">
      {headers.map(({ header }, index) => renderHeadingRow(header, index))}
    </tr>
  );

  const renderRow = (row, key) => {
    return (
      <tr role="row" className="table-row" key={key}>
        <Cell content={row} sticky={sticky} />
      </tr>
    );
  };

  const tbodyMarkup = rows.map((row, i) => renderRow(row, i));

  const tableStyles = classNames({
    "table--scroll-x": scrollable,
    "table--sticky-scroll": scrollable && sticky
  });

  return (
    <div className="component__container--table">
      <div className="table__container">
        <div className={tableStyles}>
          <table
            role="table"
            summary="A list of resources listed on your ibm cloud account"
            className="bx--data-table bx--data-table--no-border"
          >
            <thead>{theadMarkup}</thead>
            <tbody>{tbodyMarkup}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
