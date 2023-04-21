import "./Button.component.css";

type Props = {
  color: string;
  text: string;
};

export const Button: React.FC<Props> = ({ color, text }) => {
  return (
    <a
      href="https://t.me/jetoffice_bot"
      target="_blank"
      className={`button button--${color}`}
    >
      {text}
    </a>
  );
};
