
Bookmarks Chrommander IS UNDER CONSTRUCTION
===========================================

Bookmarks Chrommander is a Google Chrome extension which allows to manage browser bookmarks in old good Midnight Commander way.\
It is written in React and Redux cause both are cool :)\
For Google Chrome >= version 60.


### Available Scripts

After cloning this repo you can run inside the project directory:

`$ yarn && yarn start`

Then open Chrome, and `Load Unpacked` the newly created `/dev` folder to see your extension added locally to your browser.\
After source code changes the watcher will automatically reload the extension in this (developer) mode, except background script changes - these need the extension to be re-builded.\
When you’re ready to ship your extension, create an optimized build with `$ yarn build`.\
You can also use `$ yarn test` which launches the test runner in interactive watch mode.


### Some important files

- Popup UI which renders your `index.js` when you click on your extension in the browser extension icon.
- Background script which will run in the background from `/background/index.js` and can be use for things like state-management.
- Content script from `/contentScript/index.js` which will run on configured web pages.
- Options UI which renders your `/options/` when you click on your extension in the browser extension icon.

These are all controlled by the all important `/public/manifest.json` which is configurable by you to control what kind of extension you want build.

Do not delete any of the entry files, this is a convention to remind you what your extensions could be.\
The build will notify you and fail if you remove any of these important files.
