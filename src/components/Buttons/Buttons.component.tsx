import { Button } from "../Button";
import "./Buttons.component.css";

export const Buttons = () => {
  return (
    <div className="buttons">
      <Button color="dark" text="Get in touch" />
      <Button color="pink" text="Start free trial" />
    </div>
  );
};
