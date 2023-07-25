import { Description, Service } from "../../../types/servicesDropdown.type";
import "./NewsCard.component.css";
import { Item } from "../Item";
import { services } from "../../../data/servicesDropdown.json";
import { LINKS } from "../../Navigation";
import { Descriptions } from "../Descriptions";

import "./NewsCard.component.css";

type Props = {
    activeServiceId: number
};

export const NewsCard: React.FC<Props> = ({
    activeServiceId
}) => {

  return (
    <div>
    <div className="news-container"> {
        services.map((service) => {
            if (service.id === activeServiceId) {
            return (
                service.news != null 
                ? service.news.map((news) => {
                    return (
                        <div className="news-card">
                            <img src={news.image} alt={news.alt} />

                            <div className="text-overlay">
                                {news.title}
                            </div>
                        </div>
                    )
                })
                : null
            )
            }
        })
    }
        {/* <div className="news-card">
            <img src="../src/assets/news1.png" alt="123" />

            <div className="text-overlay">
            JetOffice email Management Services for business
            </div>
        </div>
        <div className="news-card">
            <img src="../src/assets/news2.png" alt="123" />

            <div className="text-overlay">
            JetOffice email Management Services for business
            </div>
        </div>
        <div className="news-card">
            <img src="../src/assets/news3.png" alt="123" />

            <div className="text-overlay">
            JetOffice email Management Services for business
            </div>
        </div> */}
    </div>
    </div>

  );

};
