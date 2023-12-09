import React from 'react'
import styles from '../css/GroupName.module.scss'

export default function GroupName({
    groupName,
    bgColor,
}) {
    const secondChar =  groupName.indexOf(" ");
    const groupShort = groupName.charAt(0).toUpperCase() + (secondChar!=-1 ? groupName.charAt(secondChar+1).toUpperCase() : "");
  return (
    <div className={styles.group_name}>
        <div className={styles.group_short} style={{backgroundColor: bgColor}}>
            {groupShort}
        </div>
        <h3>{groupName}</h3>
    </div>
  )
}
