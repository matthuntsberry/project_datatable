import React from "react";
import Cell from "./Cell";

import "./_scroll-table.scss";

const ScrollTable = ({ rows, headers, scrollable }) => {
  const renderHeadingRow = (header, key) => {
    return <Cell content={header} header={true} key={key} />;
  };

  const theadMarkup = (
    <tr>{headers.map(({ header }, i) => renderHeadingRow(header, i))}</tr>
  );

  const renderRow = (row, key) => {
    return (
      <tr className="table__row" key={key}>
        <Cell content={row} />
      </tr>
    );
  };

  const tbodyMarkup = rows.map((row, i) => renderRow(row, i));

  return (
    <div className={scrollable && "scrollable"}>
      <div className="bx--data-table-container data-table">
        <table className="bx--data-table bx--data-table--no-border">
          <thead>{theadMarkup}</thead>
          <tbody>{tbodyMarkup}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ScrollTable;
