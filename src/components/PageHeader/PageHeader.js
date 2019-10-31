import React from "react";
import { Button } from "carbon-components-react";

const PageHeader = ({ title }) => {
  return (
    <div className="page-header__container">
      <h1 className="page-header">{title}</h1>
      <Button className="bx--btn bx--btn--primary" type="button">
        Create
        <svg
          focusable="false"
          preserveAspectRatio="xMidYMid meet"
          // style="will-change: transform;"
          xmlns="http://www.w3.org/2000/svg"
          className="bx--btn__icon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          aria-hidden="true"
        >
          <path d="M9 7L9 3 7 3 7 7 3 7 3 9 7 9 7 13 9 13 9 9 13 9 13 7z"></path>
        </svg>
      </Button>
    </div>
  );
};

export default PageHeader;
