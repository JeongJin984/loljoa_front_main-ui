import Link from "next/link"
import { Segment, Button } from 'semantic-ui-react'
import styles from '../../styles/Gnb.module.css';

const Gnb = () => {
  return (
    <div>
      <div className={styles.navbarWeb} >
        <Link href="/" className={styles.logo}>
          <a style={{ color: "white" }}>
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
        <Button href={"/login"}>
          <div>
            로그인
          </div>
        </Button>
      </div>
    </div>
  )
}

export default Gnb