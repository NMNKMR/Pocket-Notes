import React from 'react'
import GroupsHandler from '../components/HOC/GroupsHandler'
import Banner from '../components/Banner'

function Home() {
  return (
    <GroupsHandler>
        <Banner/>
    </GroupsHandler>
  )
}

export default Home