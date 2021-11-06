const initialMessage = null

const notificationReducer = ( state = initialMessage, action) => {
  switch(action.type) {
    case 'SET_MESSAGE':
      return action.message
    case 'REMOVE':
      return null
    default: return state
  }
}

export const updateNotification = (msg, timeout) => {
  return async dispatch => {
    dispatch({
      type: 'SET_MESSAGE',
      message: msg
    })
    setTimeout(() => {
      dispatch(removeNotification())
    }, timeout*1000);
  }
}

export const removeNotification = () => {
  return {
    type: 'REMOVE'
  }
} 

export default notificationReducer