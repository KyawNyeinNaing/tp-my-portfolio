import { Row, Col } from '../core'
import styles from './About.module.scss'

const Skills = () => {
  return (
    <div className={styles.portfolio_resume_panel}>
      <h2 className={styles.portfolio_resume_panel_heading}>Education</h2>

      <Row>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(skill => (
          <Col md='6'>
            <div className={styles.portfolio_progress_panel}>
              <div className={styles.portfolio_progress_heading}>
                <h5 className={styles.portfolio_progress_heading}>Javascript</h5>
                <span>50%</span>
              </div>
              <div className={styles.portfolio_progress_wrapper}>
                <div className={styles.portfolio_progress_bar} />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Skills
