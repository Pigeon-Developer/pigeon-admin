import React from 'react'
import NavBar from '../navbar'
import logo from './logo.png'
import styles from './index.module.scss'

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <img src={logo} alt='' />
          <span>Pigeon Admin</span>
        </div>
        <div className={styles.menu}>
          <NavBar />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
