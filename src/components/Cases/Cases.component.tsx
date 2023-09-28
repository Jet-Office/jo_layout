import "./Cases.component.css";
import { services } from "../../data/services.json"
import { useEffect, useRef, useState } from "react";
import { Description } from "../../types/service.type";
import { CasesItem } from "./components/CasesItem";
import { CasesDescription } from "./components/CasesDescriptions/CasesDescriptions.component";
import { motion } from "framer-motion";

type Props = {
  windowWidth: number;
  casesPageRef: React.RefObject<HTMLElement>;
};

const animationFromLeft = {
  hidden: {
    x: -100,
    opacity: 0
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
}

const animationFromRight = {
  hidden: {
    x: 100,
    opacity: 0
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
}

export const Cases: React.FC<Props> = ({ windowWidth, casesPageRef }) => {
  const [descriptions, setDescriptions] = useState<Description[]>([]);
  const [activeCaseId, setActiveCaseId] = useState(4);

  const сasesListRef = useRef<HTMLDivElement>(null);
  const casesContent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    if (сasesListRef.current && casesContent.current && windowWidth > 930) {
      casesContent.current.style.height = `${сasesListRef.current.offsetHeight}px`;
    }
  }, [windowWidth]);
  
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="cases" id="cases" ref={casesPageRef}>
      <div className="cases__container container">
        <motion.h2 custom={1} variants={animationFromLeft} className="cases__title h2">Cases we can do</motion.h2>
        <div ref={casesContent} className="cases__content">
          <div ref={сasesListRef} className="cases__list">
            {services.map((item) => (
              <CasesItem key={item.id} windowWidth={windowWidth} caseItem={item} setActiveCaseId={setActiveCaseId} setDescriptions={setDescriptions} activeCaseId={activeCaseId} />
            ))}
          </div>
          <motion.div custom={2} variants={animationFromRight} className="cases-desc-container">
            {windowWidth > 930 && <CasesDescription descriptions={descriptions} />}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
