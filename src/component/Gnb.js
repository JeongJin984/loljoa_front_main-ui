import Link from "next/link"
import { Segment } from 'semantic-ui-react'
import styles from '../../styles/Gnb.module.css';

const Gnb = () => {
  return (
    <div >
      <Segment inverted className={styles.navbarWeb} >
        <Link href="/">
          <a className={styles.logo}>
            <h1>LOLjoa</h1>
          </a>
        </Link>
        <ul className={styles.links}>
          <li className={styles.navlink}>
            <Link href="/betting">경기 베팅</Link>
          </li>
          <li className={styles.navlink}>
            <Link href="/schedule">경기 일정</Link>
          </li>
          <li className={styles.navlink}>
            <Link href="/information">팀 소개</Link>
          </li>
          <li className={styles.navlink}>
            <Link href="/board">게시판</Link>
          </li>
        </ul>
        <ul></ul>
      </Segment>
    </div>
  )
}

export default Gnb