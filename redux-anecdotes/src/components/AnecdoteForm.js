import React from 'react'
import { connect } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { updateNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

  const handleNewAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.addAnecdote(content)
    props.updateNotification(`You added '${ content }'`, 5)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleNewAnecdote}>
        <div><input name='anecdote' /></div>
        <button>create</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addAnecdote: content => dispatch(addAnecdote(content)),
    updateNotification: (message,timeout) => dispatch(updateNotification(message, timeout))
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(AnecdoteForm)