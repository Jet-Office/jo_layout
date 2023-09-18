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
            <a href="https://www.google.com.ua/" target="_blank"><img src="/partners/google.svg" alt="google" /></a>
          </li>
          <li className="patner--item">
            <a href="https://clickup.com/" target="_blank"><img src="/partners/clickup.svg" alt="clickup" /></a>
          </li>
          <li className="patner--item">
            <a href="https://aws.amazon.com/?nc1=h_ls" target="_blank"><img src="/partners/aws.svg" alt="aws" /></a>
          </li>
          <li className="patner--item">
            <a href="https://miro.com/" target="_blank"><img src="/partners/miro.svg" alt="miro" /></a>
          </li>
          <li className="patner--item">
            <a href="https://www.mongodb.com/" target="_blank"><img src="/partners/mongodb.svg" alt="mongodb" /></a>
          </li>
        </ul>
      </div>
    </div>
  );
};
