export default {
  getAll: state => state.pages,
  getById: state => pageId => state.pages[pageId],
  curPage: state => state.curPage
}