import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import GroupArea from '../components/GroupArea/GroupArea'
import CreateGroup from '../components/CreateGroup'
import styles from './css/Home.module.scss'

function Home() {
    const [groups, setGroups] = useState([])
    const [showCreateGroup, setShowCreateGroup] = useState(false);

    useEffect(()=> {
        const storedGroups = JSON.parse(localStorage.getItem('groups'));
        if(storedGroups && storedGroups.length > 0) setGroups(storedGroups);
    }, [])

    const addGroup = (newGroup)=> {
        setGroups((prev)=> [...prev, newGroup])
        localStorage.setItem('groups', JSON.stringify([...groups, newGroup]));
        setShowCreateGroup(false);
    }
  return (
    <div className={styles.home}>
        <GroupArea groups={groups} openCreateGroup={()=> setShowCreateGroup(true)}/>
        <Banner/>
        {showCreateGroup && 
            <div className={styles.create_group_modal} onClick={()=> setShowCreateGroup(false)}>
                <CreateGroup groups={groups} addGroup={addGroup} />
            </div>
        }
    </div>
  )
}

export default Home