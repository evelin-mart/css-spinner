import { Button } from "../Button";
import { Spinner } from "../Spinner";

import "./App.styles.css";

export const App = () => {
  return (
    <div className="container">
      <div className="wrapper wrapper-main">
        <div className="wrapper wrapper-top">
          <Spinner />
          <div className="button-group">
            <Button className="fn-button">A</Button>
            <Button className="fn-button">B</Button>
            <Button className="fn-button">C</Button>
          </div>
        </div>
        <div className="wrapper wrapper-bottom">
          <div className="ballance">$ 243623</div>
          <Button className="fn-button">
            <div className="burger-menu">
              <div className="burger-item" />
              <div className="burger-item" />
              <div className="burger-item" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
