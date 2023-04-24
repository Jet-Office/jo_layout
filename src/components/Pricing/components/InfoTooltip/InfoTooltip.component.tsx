import "./InfoTooltip.component.css";

type Props = {
  description: string;
};

export const InfoTooltip: React.FC<Props> = ({ description }) => {
  return (
    <div className="info">
      <div className="info__description">
        <p className="info__text">{description}</p>
      </div>
      <div className="info__icon">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.8333 17.6667C15.055 17.6667 17.6667 15.055 17.6667 11.8333C17.6667 8.61167 15.055 6 11.8333 6C8.61167 6 6 8.61167 6 11.8333C6 15.055 8.61167 17.6667 11.8333 17.6667Z"
            stroke="#CCCCCC"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.8334 14.1667V11.8334"
            stroke="#CCCCCC"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.8334 9.5H11.8392"
            stroke="#CCCCCC"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};
