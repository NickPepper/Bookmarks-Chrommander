const getBookmarks = () => ({
  type: 'GET_BOOKMARKS_DATA'
})

const setBookmarks = (dataObj) => ({
  type: 'SET_BOOKMARKS_DATA',
  payload: dataObj
})

export default {
  getBookmarks,
  setBookmarks
}
