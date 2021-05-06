import styles from './About.module.scss'
import { FaGem } from 'react-icons/fa'

const Experience = ({ experience }) => {

  return (
    <div className={styles.portfolio_resume_panel}>
      <h2 className={styles.portfolio_resume_panel_heading}>Experience</h2>
      <div className={styles.portfolio_resume_wrapper}>
        <div className={styles.portfolio_resume_icon}>
          <FaGem />
        </div>
        <div className={styles.portfolio_resume_content}>
          <span className={styles.portfolio_resume_content_date}>2016 - 2018</span>
          <h2 className={styles.portfolio_resume_content_title}>Jinior Frontend Developer</h2>
          <span className={styles.portfolio_resume_content_position}>Smilax Global Co.,Ltd</span>
        </div>
      </div>

      <div className={styles.portfolio_resume_wrapper}>
        <div className={styles.portfolio_resume_icon}>
          <FaGem />
        </div>
        <div className={styles.portfolio_resume_content}>
          <span className={styles.portfolio_resume_content_date}>2018 - Present</span>
          <h2 className={styles.portfolio_resume_content_title}>Senior Frontend Developer</h2>
          <span className={styles.portfolio_resume_content_position}>Innovix Solutions Co.,Ltd</span>
        </div>
      </div>

      <div className={styles.portfolio_resume_wrapper}>
        <div className={styles.portfolio_resume_icon}>
          <FaGem />
        </div>
        <div className={styles.portfolio_resume_content}>
          <span className={styles.portfolio_resume_content_date}>2018 - Present</span>
          <h2 className={styles.portfolio_resume_content_title}>Web Developer (Wordpress)</h2>
          <span className={styles.portfolio_resume_content_position}>Brighter Future Myanmar Foundation (BFM)</span>
          <p>Brighter Future Myanmar Foundation (BFM) is one of the largest philanthropic foundations in Myanmar working to uplift the lives of underdeveloped communities.</p>
        </div>
      </div>

      <div className={styles.portfolio_resume_wrapper}>
        <div className={styles.portfolio_resume_icon}>
          <FaGem />
        </div>
        <div className={styles.portfolio_resume_content}>
          <span className={styles.portfolio_resume_content_date}>2018 - Present</span>
          <h2 className={styles.portfolio_resume_content_title}>React Developer</h2>
          <span className={styles.portfolio_resume_content_position}>Innovix Solutions Co.,Ltd</span>
        </div>
      </div>
    </div>
  )
}

export default Experience
