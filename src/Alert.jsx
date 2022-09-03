import React from "react";
const types = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];
class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {

    const alertType = types.includes(this.state.type)
      ? this.state.type
      : types[0];
    const alertText = this.state.text.trim() !== '' ? this.state.text : "";
    const isShown = !!(alertType && alertText);

    return (
      <>
        {isShown && (
          <div className={"alert alert-" + `${alertType}`} role="alert">
            {alertText}
          </div>
        )}
      </>
    );
  }
}

export default Alert;
