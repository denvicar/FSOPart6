import anecdotesService from '../services/anecdotes'

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case 'VOTE':
      const anecdote = state.find(a => a.id === action.id)
      const newAnecdote = { ...anecdote, votes: anecdote.votes+1 }
      return state.map(a => a.id === action.id ? newAnecdote : a)
    case 'ADD_ANECDOTE':
      return state.concat(action.anecdote)
    case 'INIT_ANECDOTES':
      return action.anecdotes
    default: return state
  }

}

export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    id
  }
}

export const addAnecdote = (anecdote) => {
  return {
    type: 'ADD_ANECDOTE',
    anecdote
  }
}

export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      anecdotes
    })
  }
}

export default reducer