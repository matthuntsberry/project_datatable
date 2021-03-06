import React from "react";

const Cell = ({ content, header, sticky, headerIndex }) => {
  const cellMarkup = header ? (
    <>
      {/* If first column in data table give it sticky classes */}
      {headerIndex === 0 ? (
        <th
          role="columnheader"
          className={sticky && "col-header--sticky"}
          scope="col"
        >
          <span role="heading" className="bx--table-header-label">
            {content}
          </span>
        </th>
      ) : (
        <th role="columnheader" scope="col">
          <span role="heading" className="bx--table-header-label">
            {content}
          </span>
        </th>
      )}
    </>
  ) : (
    Object.values(content)
      .slice(1)
      .map((value, index) => (
        <>
          {/* If first column in data table give it these classes */}
          {index === 0 ? (
            <th
              role="rowheader"
              className={sticky && "table-cell row-header--sticky"}
              scope="row"
            >
              {value}
            </th>
          ) : (
            <td role="cell" className="table-cell" key={index}>
              {value}
            </td>
          )}
        </>
      ))
  );

  return cellMarkup;
};

export default Cell;
