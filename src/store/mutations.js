const DATA_CHANGE = 'DATA_CHANGE'
const CLEAR_DATA = 'CLEAR_DATA'

export default {
  [DATA_CHANGE](state, obj) {
    const roleType = obj.subtype
    if (!roleType) {
      state.pages[obj.pageId] = obj.fields
    } else {
      state.pages[roleType] = obj.pages
    }
  },
  [CLEAR_DATA](state) {
    state.pages = {}
  }
}