import Link from 'next/link'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import Layout from '../layout'
import { Col, Container, Row, Section, Button } from '../components'
import Input from '../components/form/Input'
import TextArea from '../components/form/TextArea'
import styles from '../styles/Contact.module.scss'

import { FcHome, FcCallback, FcFeedback, FcGlobe } from 'react-icons/fc'

const Contact = () => {

  const onDataSubmit = (values, actions) => {
    actions.setSubmitting(true)
    setDisabled(true)
  }

  return (
    <Layout title='Contact Me' className={styles.poryfolio_me}>
      <Section>
        <Container>
          <Row>
            <Col space='12'>
              <div className={styles.portfolio_contact_heading_wrapper}>
                <h2 className={styles.portfolio_contact_heading}>
                  Contact Me
              </h2>
                <p>Please contact me via email or phone</p>
              </div>
            </Col>
            <Col md='3'>
              <div className={styles.portfolio_contact_col}>
                <div className={styles.portfolio_contact_icon}>
                  <FcHome />
                </div>
                <div className={styles.portfolio_contact}>
                  <h3>Address</h3>
                  <p>1/302 shwekainery house place, Yangon.</p>
                </div>
              </div>
            </Col>
            <Col md='3'>
              <div className={styles.portfolio_contact_col}>
                <div className={styles.portfolio_contact_icon}>
                  <FcCallback />
                </div>
                <div className={styles.portfolio_contact}>
                  <h3>Contact Number</h3>
                  <Link href='tel:+959420170266'>
                    <a>+959-42017-026-6</a>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md='3'>
              <div className={styles.portfolio_contact_col}>
                <div className={styles.portfolio_contact_icon}>
                  <FcFeedback />
                </div>
                <div className={styles.portfolio_contact}>
                  <h3>Email Address</h3>
                  <Link href='mailto:thetpai.tp27@gmail.com'>
                    <a>thetpai.tp27@gmail.com</a>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md='3'>
              <div className={styles.portfolio_contact_col}>
                <div className={styles.portfolio_contact_icon}>
                  <FcGlobe />
                </div>
                <div className={styles.portfolio_contact}>
                  <h3>Website</h3>
                  <a>coming</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Col md='6'>
              <div className={styles.portfolio_contact_form_image}
                style={
                  { backgroundImage: 'url("/uploads/contact.jpg")' }
                }
              >

              </div>
            </Col>
            <Col md='6'>
              <div className={styles.portfolio_contact_form}>
                <Formik
                  initialValues={'name', 'email', 'subject', 'message'}
                  validationSchema={
                    Yup.object({
                      name: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Your Name is required'),
                      email: Yup.string()
                        .email('Invalid email address')
                        .required('Email is required'),
                      phone: Yup.string(),
                      subject: Yup.string()
                        .required('Attention is required'),
                      message: Yup.string()
                        .max(200, "Your message is too long!")
                        .required('Message is required')
                    })
                  }
                  onSubmit={(values, actions) => onDataSubmit(values, actions)}
                >
                  <Form>
                    <Input label="Your Name" name="name" type="text" placeholder="Enter your name" require={true} />
                    <Input label="Your Email" name="email" type="email" placeholder="Enter your email" require={true} />
                    <Input label="Subject" name="subject" type="text" placeholder="Subject" require={true} />
                    <TextArea label="Message" name="message" type="text" require={true} rows_height="150" />
                    <Button className='primary' type="submit">
                      Send Message
                    </Button>
                  </Form>
                </Formik>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </Layout>
  )
}

export default Contact
