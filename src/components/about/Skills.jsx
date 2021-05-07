import styled from 'styled-components'
import { Row, Col } from '../core'
import styles from './About.module.scss'

const ProgressBar = styled.div`
  width: ${props => props?.skill}%;
`

const Skills = ({ skills }) => {
  return (
    <div className={styles.portfolio_resume_panel}>
      <h2 className={styles.portfolio_resume_panel_heading}>{skills?.[0]?.name}</h2>

      <Row>
        {skills?.[0]?.skills?.length > 0 &&
          skills?.[0]?.skills?.map(skill => (
            <Col md='6'>
              <div className={styles.portfolio_progress_panel}>
                <div className={styles.portfolio_progress_heading}>
                  <h5 className={styles.portfolio_progress_heading}>{skill?.language}</h5>
                  <span>{skill?.skill} %</span>
                </div>
                <div className={styles.portfolio_progress_wrapper}>
                  <ProgressBar className={styles.portfolio_progress_bar} skill={skill?.skill} />
                </div>
              </div>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default Skills
