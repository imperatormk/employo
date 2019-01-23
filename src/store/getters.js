export default {
  getAll: state => state.pages,
  getById: state => (pageId, roleType) => {
    if (!roleType) return state.pages[pageId]
    return state.pages[roleType].find(page => page.pageId === pageId)
  },
}