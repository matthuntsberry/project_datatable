import React from "react";
import { Button, Search } from "carbon-components-react";
import { Renew16, SettingsAdjust16, Settings16 } from "@carbon/icons-react";

export const TableToolBar = ({ handleToggle, toggle }) => {
  return (
    <div className="component__container--table-toolbar">
      <Search light={true} labelText="Search Details" />
      <div>
        <Button
          className="bx--btn bx--btn--ghost"
          onClick={() => {
            handleToggle(!toggle);
          }}
        >
          <SettingsAdjust16 />
        </Button>
        <Button className="bx--btn bx--btn--ghost button--renew">
          <Renew16 />
        </Button>
        <Button className="bx--btn bx--btn--ghost">
          <Settings16 />
        </Button>
      </div>
    </div>
  );
};

export default TableToolBar;
