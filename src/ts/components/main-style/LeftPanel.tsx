import React from "react";

// Components
import { TabSuite } from "./Tabs/TabSuite";

import ErrorBoundary from "./ErrorBoundary";

import { LeftCollapse } from "./LeftCollapse";

// Styles
import "./LeftPanel.scss";

export const LeftPanel: React.FC = () => {
  // $(document).ready(() => {
  //   $("#builder-resizeable").resizable({ handles: "e", minWidth: 600 });
  // });
  return (
    <ErrorBoundary compName="LeftPanel">
      <div className="builder-LeftPanel">
        <TabSuite></TabSuite>
        <LeftCollapse></LeftCollapse>
      </div>
    </ErrorBoundary>
  );
};
