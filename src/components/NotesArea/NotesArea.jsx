import React, { useState } from 'react'
import styles from '../css/NotesArea.module.scss'
import GroupName from '../GroupArea/GroupName';
import NoteCard from './NoteCard';
import WritingArea from './WritingArea';

function NotesArea({
    screenWidth,
}) {
    const [notes, setNotes] = useState([{content: "Lorem", date: "11 Dec 2023", time: "5:43 AM"}]);

  return (
    <div className={styles.notes_area}>
        <div className={styles.groupname_bar}>
            <GroupName groupName="My Group" bgColor="#F19576" fontColor='#FFF'/>
        </div>
        <div className={styles.notes_container}>
            {notes.map((note, index)=> (
                <NoteCard key={index} content={note.content} date={note.date} time={note.time}/>
            ))}
        </div>
        <WritingArea/>
    </div>
  )
}

export default NotesArea;
