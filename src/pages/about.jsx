import { useState } from 'react'
import Link from 'next/link'
import Layout from '../layout'
import { Education, Experience, Skill } from '../components/about'
import { Col, Container, Row, Section } from '../components'
import styles from '../styles/About.module.scss'

import restResumes from '../../data'

const About = () => {
  const [show, setShow] = useState('education')

  console.log(restResumes)

  const filteredEdu = restResumes?.filter(resume => resume?.name === 'Educations')
  const filteredExp = restResumes?.filter(resume => resume?.name === 'Experience')
  const filteredSkill = restResumes?.filter(resume => resume?.name === 'Skills')

  return (
    <Layout title='About' className='poryfolio-about'>
      <Section>
        <Container>
          <Row>
            <Col md='6'>
              <div className={styles.portfolio_img}>
                <img src='./uploads/about.jpg' alt='about' />
              </div>
            </Col>

            <Col md='6'>
              <div className={styles.portfolio_detail_panel}>
                <h2 className={styles.portfolio_detail_panel_heading}>
                  About Me
                </h2>
                <p>
                  I am a person who is positive about every spect of life. There are many things I like to do, to see,
                  and to experience. I like to read, I like to think, I like to travel, and so on, And, I like to laugh. I
                  always wanted to be a great developer.
                  This is a brief introduction of myself.
                </p>
                <div className={styles.portfolio_detail_panel_row}>
                  <div className={styles.portfolio_detail_panel_label}>Name</div>
                  <div className={styles.portfolio_detail_panel_value}>Kyaw Nyein Naing</div>
                </div>
                <div className={styles.portfolio_detail_panel_row}>
                  <div className={styles.portfolio_detail_panel_label}>Date of birth</div>
                  <div className={styles.portfolio_detail_panel_value}>March 27, 1995</div>
                </div>
                <div className={styles.portfolio_detail_panel_row}>
                  <div className={styles.portfolio_detail_panel_label}>Address</div>
                  <div className={styles.portfolio_detail_panel_value}>Thingangyun, Yangon, Myanmar.</div>
                </div>
                <div className={styles.portfolio_detail_panel_row}>
                  <div className={styles.portfolio_detail_panel_label}>Email</div>
                  <div className={styles.portfolio_detail_panel_value}>
                    <Link href='mailto:thetpai.tp27@gmail.com'>thetpai.tp27@gmail.com</Link>
                  </div>
                </div>
                <div className={styles.portfolio_detail_panel_row}>
                  <div className={styles.portfolio_detail_panel_label}>Phone</div>
                  <div className={styles.portfolio_detail_panel_value}>
                    <Link href='tel:+959420170266'>+959-42017-026-6</Link>
                  </div>
                </div>

                <div className={styles.portfolio_complete_project}>
                  <p><span>20</span> Projects Complete</p>
                  <Link href='/cv.zip'>
                    <a className={styles.portfolio_download} download>
                      Download CV
                    </a>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Col md='3'>
              <nav className={styles.portfolio_sidenav_sticky}>
                <div className={styles.portfolio_sidenav_wrap}>
                  <div
                    className={`${styles.portfolio_sidenav_label} ${show === 'education' && styles.active}`}
                    onClick={() => setShow('education')}>Education</div>
                  <div
                    className={`${styles.portfolio_sidenav_label} ${show === 'experience' && styles.active}`}
                    onClick={() => setShow('experience')}>Experience</div>
                  <div
                    className={`${styles.portfolio_sidenav_label} ${show === 'skill' && styles.active}`}
                    onClick={() => setShow('skill')}>Skills</div>
                </div>
              </nav>
            </Col>
            <Col md='9'>
              {show === 'education' && <Education education={filteredEdu} />}
              {show === 'experience' && <Experience experience={filteredExp} />}
              {show === 'skill' && <Skill skills={filteredSkill} />}
            </Col>
          </Row>
        </Container>
      </Section>
    </Layout>
  )
}

export default About
