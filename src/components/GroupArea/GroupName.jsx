import React from 'react'
import styles from '../css/GroupName.module.scss'

export default function GroupName({
    groupName,
    bgColor,
    fontColor="#000",
}) {
    const groupSplit = groupName.split(/[ ]+/);
    const groupShort = groupSplit[0].charAt(0).toUpperCase() + (groupSplit[1]? groupSplit[1].charAt(0).toUpperCase() : "");
  return (
    <div className={styles.group_name}>
        <div className={styles.group_short} style={{backgroundColor: bgColor}}>
            {groupShort}
        </div>
        <h3 style={{color: fontColor}}>{groupName}</h3>
    </div>
  )
}
