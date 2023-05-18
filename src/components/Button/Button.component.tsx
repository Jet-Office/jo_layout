import "./Button.component.css";

type Props = {
  color: string;
  text: string;
};

export const Button: React.FC<Props> = ({ color, text }) => {
  return (
    <a
      href="https://t.me/jetoffice_help_bot"
      target="_blank"
      rel="noreferrer"
      className={`button button--${color}`}
    >
      {text}
    </a>
  );
};
