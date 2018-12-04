import api from '../api'

export const getMoods = () => {
  return api.get('/moods')
}

// TODO post Moods
