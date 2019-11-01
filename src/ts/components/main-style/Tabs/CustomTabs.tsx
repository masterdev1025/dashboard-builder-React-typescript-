import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tab from "@material-ui/core/Tab";
import React from "react";

import Tabs from "@material-ui/core/Tabs";

import "./CustomTabs.scss";

interface CustomTabsProps {
  currentTab: number;
  changeTab(event: React.ChangeEvent<{}>, newValue: number): void;
}

export const CustomTabs: React.FC<CustomTabsProps> = props => {
  const { currentTab, changeTab } = props;

  return (
    <div className="builder-CustomTabs">
      <Tabs
        className="builder-StyledTabs"
        value={currentTab}
        onChange={changeTab}
        aria-label="simple tabs example"
      >
        <Tab
          className="builder-StyledTab"
          label={
            <div>
              <FontAwesomeIcon
                className="builder-tab-icon"
                icon={"database"}
              ></FontAwesomeIcon>
              {"TAB 1"}
            </div>
          }
          disableRipple
        />
        <Tab
          className="builder-StyledTab"
          label={
            <div>
              <FontAwesomeIcon
                className="builder-tab-icon"
                icon={"chart-area"}
              ></FontAwesomeIcon>
              {"TAB 2"}
            </div>
          }
          disableRipple
        />
      </Tabs>
    </div>
  );
};
