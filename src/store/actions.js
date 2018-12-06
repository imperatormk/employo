const DATA_CHANGE = 'DATA_CHANGE'

export default {
  dataChange({ commit }, data) {
    commit(DATA_CHANGE, data)
    return Promise.resolve()
  }
}