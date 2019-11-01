import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./LeftCollapse.scss";

const LeftCollapseContent: React.FC = () => {
  return (
    <div className="builder-LeftCollapse-content">
      <div> show / hide panel</div>
    </div>
  );
};

export const LeftCollapse: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  const handleCLick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="builder-LeftCollapse">
      <div className="builder-LeftCollapse-trigger-wrapper">
        <div onClick={handleCLick} className="builder-LeftCollapse-trigger">
          <FontAwesomeIcon
            className="builder-LeftCollapse-icon"
            icon={isOpen ? "angle-left" : "angle-right"}
          ></FontAwesomeIcon>
        </div>
      </div>

      <div className="builder-LeftCollapse-content-wrapper" hidden={!isOpen}>
        <LeftCollapseContent></LeftCollapseContent>
      </div>
    </div>
  );
};
