import React from 'react'
import Name from '../../components/name/Name'
import "./Home.css"
import AddNameForm from '../../components/name/AddName'
const Home = () => {
  return (
    <div>
      <AddNameForm />
      <Name />
    </div>
  )
}

export default Home