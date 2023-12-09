import React from 'react'
import Banner from '../components/Banner'
import GroupArea from '../components/GroupArea/GroupArea'
import styles from './css/Home.module.scss'

function Home() {
  return (
    <div className={styles.home}>
        <GroupArea/>
        <Banner/>
    </div>
  )
}

export default Home