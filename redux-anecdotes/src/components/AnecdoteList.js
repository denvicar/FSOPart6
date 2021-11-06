import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { updateNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if (filter === '') return anecdotes
    else return anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase())) 
  } )
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    const changedAnecdote = anecdotes.find(a => a.id===id)
    dispatch(voteAnecdote({ ...changedAnecdote, votes: changedAnecdote.votes+1 }))
    dispatch(updateNotification(`You voted '${ changedAnecdote.content }'`, 5))
  }

  return (
    <div>
      {anecdotes.sort((a, b) => b.votes-a.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList