const DATA_CHANGE = 'DATA_CHANGE'
const CLEAR_DATA = 'CLEAR_DATA'

export default {
  [DATA_CHANGE](state, data) {
    state.pages[data.pageId] = data.fields
  },
  [CLEAR_DATA](state) {
    state.pages = {}
  }
}