import React from "react";

import Typography from "@material-ui/core/Typography";


import "./TabContent.scss";

interface TabPanelProps {
  children: any;
  value: number;
  index: number;
  other?: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {children}
    </Typography>
  );
}

function Tab2() {
  return <div className="builder-Analytics">tab 2 content not available yet</div>;
}
function Tab1() {
	return <div className="builder-Analytics">tab 1 content not available yet</div>;
  }

interface TabContentProps {
  currentTab: number;
}

function TabContent(props: TabContentProps) {
  const { currentTab } = props;
  return (
    <div className="builder-TabContent">
      <TabPanel value={currentTab} index={0}>
        <Tab1></Tab1>
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        <Tab2></Tab2>
      </TabPanel>
    </div>
  );
}
export default TabContent;
