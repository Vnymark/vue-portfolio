import Axios from 'axios'

const RESOURCE_NAME = '/users/vnymark/repos'

export default {
  getAll () {
    return Axios.get(RESOURCE_NAME)
  },

  get (id) {
    return Axios.get(`${RESOURCE_NAME}/${id}`)
  }
}
