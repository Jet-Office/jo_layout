import { Buttons } from "../Buttons";
import { Head } from "../Head";
import "./SectionHead.component.css";
import { useTranslation } from 'react-i18next';

type Props = {
  homePageRef: React.RefObject<HTMLElement>;
};

export const SectionHead: React.FC<Props> = ({homePageRef }) => {
  const { t } = useTranslation();

  return (
      <section className="section-head" id="home" ref={homePageRef}>
        <div className="section-head__container">
          <div className="section-head__content_container">
            <div className="section-head_text">
              <h1 className="section-head__title title">
              {t('main.title')}
              </h1>
              <p className="section-head__description">
                {t('main.description')}
              </p>
            </div>
            <Buttons />
          </div>
        </div>
      </section>
  );
};
