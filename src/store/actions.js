const DATA_CHANGE = 'DATA_CHANGE'
const CLEAR_DATA = 'CLEAR_DATA'

export default {
  clearAllData({ commit }, data) {
    commit(CLEAR_DATA, data)
    return Promise.resolve()
  },
  dataChange({ commit }, data) {
    commit(DATA_CHANGE, data)
    return Promise.resolve()
  }
}