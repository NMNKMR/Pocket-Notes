import React from 'react'
import banner from '../assets/images/banner.png'
import Lock from '../assets/icons/Lock'
import styles from './css/Banner.module.scss'

// const {banner: bannerCss, center_content, encrypt_text} = styles

function Banner() {
  return (
    <div className={`${styles.banner} remove`}>
        <div className={styles.center_content}>
            <img src={banner} alt="banner" />
            <h3>Pocket Notes</h3>
            <p>Send and receive messages without keeping your phone online. Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
        </div>
        <div className={styles.encrypt_text}>
            <span><Lock/> end-to-end encrypted</span>
        </div>
    </div>
  )
}

export default Banner