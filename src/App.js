/* eslint-disable no-undef */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import commonActions from './store/actions'
import LocalizedStrings from 'react-localization'
import l10nResources from './app.l10n'
import styled from 'styled-components'
import TopMenuItem from './components/TopMenuItem'
import Pane from './components/Pane'
import BottomMenu from './components/BottomMenu'

const l10n = new LocalizedStrings(l10nResources)

function App() {
  // const { language } = this.props
  const language = 'ru' // 'en' // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< TODO: real locales switcher (en/ru) ==> options.html
  l10n.setLanguage(language)

  const dispatch = useDispatch()
  const bookmarksData = useSelector(state => state.bookmarksData)

  const requestBookmarks = () => {
    // send to background a message requesting bookmarks
    chrome.runtime.sendMessage('get-bookmarks', (response) => {
      // got an asynchronous response from the background
      dispatch(commonActions.bookmarksDataActions.setBookmarks({
        values: [...response[0].children]
      }))
    })
  }

  useEffect(() => {
    requestBookmarks()
  })


  return (
    <StyledContainer>
      <StyledTopMenu>
        <TopMenuItem active={false} title={l10n.topMenu.left} />
        <TopMenuItem active={false} title={l10n.topMenu.file} />
        <TopMenuItem active={false} title={l10n.topMenu.comand} />
        <TopMenuItem active={true} title={l10n.topMenu.options} />
        <TopMenuItem active={false} title={l10n.topMenu.right} />
      </StyledTopMenu>

      <PanesContainer>
        <Pane title={`~/${bookmarksData.values[0].title}`} />
        <Pane title={`~/${bookmarksData.values[1].title}`} />
      </PanesContainer>

      <StyledHint>Совет: у нас также имеется толковая страница руководства.</StyledHint>

      <BottomMenu />
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  width: 800px;
  background-color: #000000;
  color: #ffffff;
`

const StyledTopMenu = styled.div`
  color: #000000;
  background-color: #00A0A0;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const PanesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const StyledHint = styled.div`
  text-align: left;
  background-color: #000000;
  color: lime;
`

export default App
