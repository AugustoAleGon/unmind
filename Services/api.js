// A library to make API calls
import { create } from 'apisauce'

const api = create({
  baseURL: 'http://localhost:3000'
})

export default api
