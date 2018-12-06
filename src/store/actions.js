const DATA_CHANGE = 'DATA_CHANGE'
const PAGE_CHANGE = 'PAGE_CHANGE'

export default {
  dataChange({ commit }, data) {
    commit(DATA_CHANGE, data)
    return Promise.resolve()
  },
  curPageChange({ commit }, curPage) {
    commit(PAGE_CHANGE, curPage)
    return Promise.resolve()
  }
}