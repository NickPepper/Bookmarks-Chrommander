const BOOKMARKS_MOCK = {
  values: [
    { title: 'XEP' },
    { title: 'XEP' }
  ]
}

const bookmarksData = (state = BOOKMARKS_MOCK, action) => {
  switch (action.type) {
    case 'SET_BOOKMARKS_DATA':
      return {
        ...state,
        values: action.payload.values
      }
    case 'GET_BOOKMARKS_DATA':
      // return state.values
      return state
    default:
      return state
  }
}

export default bookmarksData
