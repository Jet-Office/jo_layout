import { motion } from "framer-motion";
import "./ReviewsMainPage.component.css";

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

const animationFromBottom = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
}

export const ReviewsMainPage: React.FC = () => {  
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="review-container">
      <div className="container">
        <motion.h2 variants={animationFromLeft} custom={1} className="h2">Reviews</motion.h2>
      </div>
      <div className="reviews_list-container">
        <ul className="reviews_list">
          <motion.li variants={animationFromBottom} custom={1}><img src="/reviews/review1.png" alt="review" /></motion.li>
          <motion.li variants={animationFromBottom} custom={2}><img src="/reviews/review2.png" alt="review" /></motion.li>
          <motion.li variants={animationFromBottom} custom={3}><img src="/reviews/review3.png" alt="review" /></motion.li>
        </ul>
      </div>
    </motion.div>
  );
};
