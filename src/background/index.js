/* eslint-disable no-undef */
// Cause your extension doesn't need a background script, we just leave this file empty

/*
let color = '#3aa757'

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color })
  console.log('Default background color set to %cgreen', `color: ${color}`)
})

// This needs to be an export due to typescript implementation limitation of needing '--isolatedModules' tsconfig
export function messageInBackground() {
  console.log('I can run your javascript like any other code in your project')
  console.log('just do not forget, I cannot render anything !')
}

messageInBackground()
*/

let bookmarks = {
  tree: null
}

chrome.runtime.onInstalled.addListener(() => {
  if (!bookmarks.length) {
    chrome.bookmarks && chrome.bookmarks.getTree((tree) => {
      bookmarks.tree = [...tree]
    })
  }
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // A page requested user data, respond with a copy of `user`
  if (message === 'get-bookmarks') {
    sendResponse(bookmarks.tree)
  }
})
