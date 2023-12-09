import React, { useState } from 'react'
import Logo from '../../assets/icons/Notes-Logo.svg'
import styles from '../css/GroupArea.module.scss'
import GroupName from './GroupName'

function GroupArea() {
    const [groups, setGroups] = useState([])
  return (
    <div className={styles.group_area}>
        <div className={styles.logo}>
            <div>
                <img src={Logo} alt="Logo" />
                <span>Pocket Notes</span>
            </div>
        </div>
        <div className={styles.groups_container}>
            {groups?.map((group)=> (
                <div key={group.groupId}>
                    <GroupName groupName={group.groupName} bgColor={group.bgColor} />
                </div>
            ))}
        </div>
        <button className={styles.add_group_button} title='Add Group'>+</button>
    </div>
  )
}

export default GroupArea