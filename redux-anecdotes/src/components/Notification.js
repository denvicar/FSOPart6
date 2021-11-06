
import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const message = useSelector(state => state.message)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: message===null ? 'none' : '',
  }
  return (
    <div style={style}>
      { message!==null && message }
    </div>
  )
}

export default Notification