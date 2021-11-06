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

export const updateNotification = (msg) => {
  return {
    type: 'SET_MESSAGE',
    message: msg
  }
}

export const removeNotification = () => {
  return {
    type: 'REMOVE'
  }
} 

export default notificationReducer