import React from "react";
import Cell from "./Cell";
import classNames from "classnames";

const Table = ({ rows, headers, scrollable, sticky }) => {
  const renderHeadingRow = (header, key) => {
    return <Cell content={header} header={true} sticky={sticky} key={key} />;
  };

  const theadMarkup = (
    <tr className="table__header-row">
      {headers.map(({ header }, i) => renderHeadingRow(header, i))}
    </tr>
  );

  const renderRow = (row, key) => {
    return (
      <tr className="table__row" key={key}>
        <Cell content={row} sticky={sticky} />
      </tr>
    );
  };

  const tbodyMarkup = rows.map((row, i) => renderRow(row, i));

  const tableStyles = classNames({
    scrollable: scrollable,
    "scrollable--sticky": scrollable && sticky
  });

  return (
    <div className="table__wrapper">
      <div className={tableStyles}>
        <div className="bx--data-table-container data-table">
          <table className="bx--data-table bx--data-table--no-border">
            <thead>{theadMarkup}</thead>
            <tbody>{tbodyMarkup}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
