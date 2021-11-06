const initialMessage = null
let timeout

const notificationReducer = ( state = initialMessage, action) => {
  switch(action.type) {
    case 'SET_MESSAGE':
      return action.message
    case 'REMOVE':
      return null
    default: return state
  }
}

export const updateNotification = (msg, delay) => {
  return async dispatch => {
    if (timeout) clearTimeout(timeout)
    dispatch({
      type: 'SET_MESSAGE',
      message: msg
    })
    timeout = setTimeout(() => {
      dispatch(removeNotification())
    }, delay*1000);
  }
}

export const removeNotification = () => {
  return {
    type: 'REMOVE'
  }
} 

export default notificationReducer