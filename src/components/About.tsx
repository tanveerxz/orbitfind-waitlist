import { motion } from 'framer-motion';
import styles from './About.module.css'; // Import the CSS module for styling
import { styles as globalStyles } from '../styles'; // Import global styles

const About = () => {
  return (
    <div className={`${globalStyles.padding} ${styles.aboutContainer}`} id='about'>
      {/* About OrbitFind Section */}
      <motion.div 
        className={styles.aboutOrbitFind}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 className={globalStyles.sectionHeadText}>About OrbitFind</h1>
        <p className={globalStyles.sectionSubText}>
          Discover, host, and engage in events with AI-powered recommendations and interactive features. Explore a vast universe of opportunities and earn badges and achievements as you participate, creating an immersive and rewarding experience.
        </p>
        <div className={styles.socialLinks}>
          {/* <a href="https://www.instagram.com/orbitfind" target="_blank" rel="noopener noreferrer">
            <img src="/insta.svg" alt="Instagram" className={styles.socialIcon} />
          </a> */}
          <a href="https://www.linkedin.com/company/orbitfind" target="_blank" rel="noopener noreferrer">
            <img src="/linked.svg" alt="LinkedIn" className={styles.socialIcon} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
