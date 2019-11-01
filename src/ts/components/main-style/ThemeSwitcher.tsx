import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Switch from "@material-ui/core/Switch";
import React from "react";

import "./ThemeSwitcher.scss";

function ThemeSwitcher() {
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    const black = "#28334aff";
    const gray = "#e2e2e2ff";
    const purple = "#635ee7ff";
    // const yellow = "#fbde44ff";

    const styleElem = document.documentElement.style;

    if (checked) {
      styleElem.setProperty("--builder-background", black);
      styleElem.setProperty("--builder-text-color", gray);
      styleElem.setProperty("--builder-indicator", purple);
    } else {
      // styleElem.setProperty("--builder-background", white);
      // styleElem.setProperty("--builder-text-color", black);
      // styleElem.setProperty("--builder-indicator", yellow);
      styleElem.setProperty("--builder-background", "#FFFFFF");
      styleElem.setProperty("--builder-text-color", "#3C4353");
      styleElem.setProperty("--builder-indicator", "#ECC417");
    }
  });

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="builder-ThemeSwitcher">
      <FormControlLabel
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            value="checkedA"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        }
        label={
          <FontAwesomeIcon icon={checked ? "sun" : "moon"}></FontAwesomeIcon>
        }
      />
    </div>
  );
}
export default ThemeSwitcher;
