import { Button } from "../Button";

import "./Spinner.styles.css";

export const Spinner = () => {
  return (
    <div className="wrapper spinner-wrapper">
      <div className="wheel">
        <div className="wheel-item">1</div>
        <div className="wheel-item">2</div>
        <div className="wheel-item">3</div>
        <div className="wheel-item">4</div>
        <div className="wheel-item">5</div>
      </div>
      <Button className="spinner-button">spin</Button>
    </div>
  );
};
