import { Button } from "../Button";
import "./Buttons.component.css";
import useHandleClick from "../../helpers/openModal";

export const Buttons = () => {
  const handleClick = useHandleClick();

  return (
    <div className="buttons">
      <Button color="dark" text="Get in touch" onClick={handleClick} />
      <Button color="pink" text="Start free trial" onClick={handleClick} />
    </div>
  );
};
