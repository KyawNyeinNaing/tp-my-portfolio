import { useState } from 'react'
import Link from 'next/link'
import Layout from '../layout'
import { Education, Experience, Skill } from '../components/about'
import { Col, Container, Row, Section } from '../components'
import styles from '../styles/About.module.scss'
import { GiArchiveResearch } from 'react-icons/gi'

import { resume, projects } from '../../data'

const About = () => {
  const [show, setShow] = useState('education')

  const filteredEdu = resume?.filter(resume => resume?.name === 'Educations')
  const filteredExp = resume?.filter(resume => resume?.name === 'Experience')
  const filteredSkill = resume?.filter(resume => resume?.name === 'Skills')

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

      <Section>
        <Container>
          <Row>
            <Col space='12'>
              <div className={styles.portfolio_service_wrapper}>
                <h1 className={styles.portfolio_service_heading}>Services</h1>
                <p className={styles.portfolio_service_desc}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                <Row className={styles.portfolio_service_row}>
                  <Col md='5'>
                    <div className={styles.portfolio_service}>
                      <GiArchiveResearch />
                      <div className={styles.portfolio_service_desc}>
                        <h5 className={styles.portfolio_service_desc_title}>
                          Web Developer
                        </h5>
                        <p>
                          A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section style={{ paddingBottom: 0 }}>
        <div className={styles.portfolio_project_wrapper}>
          <h2 className={styles.portfolio_project_heading}>Projects</h2>
          <p>That's what I did more projects</p>

          <div className={styles.portfolio_project_row}>
            {projects?.length > 0 &&
              projects?.map(project => (
                <Col className={styles.portfolio_project_col} md='4' key={project.project_name}>
                  <Link href={project?.project_link}>
                    <a target='_blank'>
                      <div className={styles.portfolio_project_image}
                        style={
                          { backgroundImage: `url(${project?.project_image})` }
                        }
                      >
                        <div className={styles.portfolio_overlay} />
                        <div className={styles.portfolio_project_name}>
                          <h3>{project?.project_name}</h3>
                          <span>{project?.project_type}</span>
                        </div>
                      </div>
                    </a>
                  </Link>
                </Col>
              ))
            }
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default About