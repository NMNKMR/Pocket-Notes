import React from 'react'
import GroupsHandler from '../components/HOC/GroupsHandler'
import NotesArea from '../components/NotesArea/NotesArea'

function Notes() {
  return (
    <GroupsHandler>
        <NotesArea/>
    </GroupsHandler>
  )
}

export default Notes