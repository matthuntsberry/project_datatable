import React from "react";

const Cell = ({ content, header, sticky }) => {
  // const Cell = ({ content, header, key }) => {
  const cellMarkup = header ? (
    <th className={sticky && "sticky"} scope="col">
      <span className="bx--table-header-label">{content}</span>
    </th>
  ) : (
    Object.values(content)
      .slice(1)
      .map((value, i) => (
        <td className={sticky ? "sticky cell" : "cell"} key={i}>
          {value}
        </td>
      ))
  );

  return cellMarkup;
};

export default Cell;
