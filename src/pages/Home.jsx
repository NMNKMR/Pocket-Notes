import React from 'react'
import Banner from '../components/Banner'
import styles from './css/Home.module.scss'

function Home() {
  return (
    <div className={styles.home}>
        <div className={styles.group}>Group</div>
        <Banner/>
    </div>
  )
}

export default Home