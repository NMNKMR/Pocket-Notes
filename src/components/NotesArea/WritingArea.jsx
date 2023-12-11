import React from 'react'
import styles from '../css/WritingArea.module.scss'
import Send from '../../assets/icons/Send'

export default function WritingArea() {
  return (
    <div className={styles.writing_area}>
        <div className={styles.input_container}>
            <textarea name="note" id="note" placeholder='Enter you text here......'/>
            <div className={styles.save_note_button}>
                <Send/>
            </div>
        </div>
    </div>
  )
}
