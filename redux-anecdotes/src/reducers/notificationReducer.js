const initialMessage = 'Here you\'ll see notifications about your actions'

const notificationReducer = ( state = initialMessage, action) => {
  switch(action.type) {
    case 'SET_MESSAGE':
      return action.message
    default: return state
  }
}

export const updateNotification = (msg) => {
  return {
    type: 'SET_MESSAGE',
    message: msg
  }
}

export default notificationReducer