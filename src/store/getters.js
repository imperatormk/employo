export default {
  getAll: state => state.pages,
  getById: state => (pageId, roleType) => {
    if (!roleType) return state.pages[pageId]
    console.log(state.pages, roleType)
    return state.pages[roleType].find(page => page.pageId === pageId)
  },
}