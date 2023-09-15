import "./Partners.component.css";

export const Partners = () => {
  return (
    <div className="partners__section">
      <div className="container patners_container">
        <h2 className="h2">Partners</h2>
      </div>
      <div className="parners-list--container">
        <ul className="parners-list">
          <li className="patner--item">
            <img src="/partners/google.svg" alt="google" />
          </li>
          <li className="patner--item">
            <img src="/partners/clickup.svg" alt="clickup" />
          </li>
          <li className="patner--item">
            <img src="/partners/aws.svg" alt="aws" />
          </li>
          <li className="patner--item">
            <img src="/partners/miro.svg" alt="miro" />
          </li>
          <li className="patner--item">
            <img src="/partners/telegram.svg" alt="telegram" />
          </li>
          <li className="patner--item">
            <img src="/partners/mongodb.svg" alt="mongodb" />
          </li>
        </ul>
      </div>
    </div>
  );
};
