const DATA_CHANGE = 'DATA_CHANGE'

export default {
  [DATA_CHANGE](state, data) {
    state.pages[data.pageId] = data.fields
  }
}