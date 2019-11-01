import React from "react";

import "./BuilderParts.scss";

import { LeftPanel } from "./LeftPanel";

export const Header: React.FC = () => {
  return <header className="builder-Header">Header</header>;
};

export const Footer: React.FC = () => {
  return <footer className="builder-Footer">Footer</footer>;
};

export const Main: React.FC = () => {
  return (
    <div className="builder-Main">
      <LeftPanel></LeftPanel>
    </div>
  );
};
