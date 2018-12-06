const DATA_CHANGE = 'DATA_CHANGE'
const PAGE_CHANGE = 'PAGE_CHANGE'

export default {
  [DATA_CHANGE](state, data) {
    state.pages[data.pageId] = data.fields
  },
  [PAGE_CHANGE](state, curPage) {
    state.curPage = curPage
  }
}