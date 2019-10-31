import React from "react";

const Cell = ({ content, header }) => {
  const cellMarkup = header ? (
    <th scope="col">
      <span className="bx--table-header-label">{content}</span>
    </th>
  ) : (
    Object.values(content)
      .slice(1)
      .map((value, i) => <td key={i}>{value}</td>)
  );

  return cellMarkup;
};

export default Cell;
