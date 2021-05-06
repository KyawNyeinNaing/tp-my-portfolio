import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import { Main, Copyright, Container, Row, Col } from '../components'
import { MdBrightnessMedium } from 'react-icons/md'
import { useEffect, useState } from 'react'
import styles from './Layout.module.scss'

const Layout = ({ children, title, keyword, desc, className }) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'))

    setTheme(localStorage.getItem('theme'))
  }, [])

  const switchTheme = () => {
    if (theme === 'light') {
      saveTheme('dark')
    } else {
      saveTheme('light')
    }
  }

  const saveTheme = (theme) => {
    setTheme(theme)
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }

  return (
    <article className={className}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content={keyword} />
        <meta name='description' content={desc} />
        <meta charSet='utf-8' />
        <title>{title}</title>
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <header className={styles.portfolio_header}>
        <nav className={styles.portfolio_nav}>
          <Container>
            <Row>
              <Col space='12'>
                <div className={styles.portfolio_nav_wrapper}>
                  <Link href='/'>
                    <a className={styles.portfolio_nav_logo}>
                      <div className={styles.portfolio_nav_logo_name}>
                        <span>T</span>hetPai
                      </div>
                    </a>
                  </Link>
                  <ul>
                    <li>
                      <Link href='/about'>About</Link>
                    </li>
                    <li>
                      <Link href='/project'>Projects</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact me</Link>
                    </li>
                    <li className={styles.themeSwitcher} onClick={switchTheme}>
                      <MdBrightnessMedium />
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </nav>
      </header>
      <Main>
        {children}
      </Main>
      <footer className={styles.portfolio_footer}>
        <Copyright data='Thet Pai' />
      </footer>
    </article>
  )
}

Layout.defaultProps = {
  title: 'My Porifolio',
  keyword: 'Web Development, Programming',
  desc: 'Get the latest news in web dev'
}

export default Layout