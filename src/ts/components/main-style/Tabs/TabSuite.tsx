import React from "react";

import "./TabSuite.scss";

import "webpack-jquery-ui";

import { CustomTabs } from "./CustomTabs";
import TabContent from "./TabContent";
import ThemeSwitcher from "./ThemeSwitcher";

export const TabSuite: React.FC = () => {
  const [currentTab, setCurrentTab] = React.useState(0);

  function handleChange(event: React.ChangeEvent, newValue: number) {
    event.preventDefault();
    setCurrentTab(newValue);
  }

  return (
    <div className="builder-TabSuite">
      <CustomTabs currentTab={currentTab} changeTab={handleChange}></CustomTabs>

      <TabContent currentTab={currentTab}></TabContent>
      <ThemeSwitcher></ThemeSwitcher>
    </div>
  );
};
