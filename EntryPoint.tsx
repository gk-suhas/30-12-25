import React from 'react'
import { Link } from 'react-router-dom'
function EntryPoint() {
  return (
    <>
    <Link to="/admin">admin</Link>
    <br />
    <br />
    <Link to="/student">student</Link>
    </>
  )
}

export default EntryPoint