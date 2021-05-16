import React, { memo } from 'react'
import styled from 'styled-components'
import BottomMenuItem from '../BottomMenuItem'
import LocalizedStrings from 'react-localization'
import l10nResources from './bottom-menu.l10n'

const l10n = new LocalizedStrings(l10nResources)

function BottomMenu() {
  // const { language } = this.props
  const language = 'ru' // 'en' // <<<<<<<<<<<<<<< TODO: real locales switcher (en/ru)
  l10n.setLanguage(language)

  return (
    <StyledBottomMenu>
      {l10n._defaultLanguageFirstLevelKeys.map((item, idx) => (<BottomMenuItem
        key={idx}
        number={item}
        title={l10n[item]}
      />))}
    </StyledBottomMenu>
  )
}

const StyledBottomMenu = styled.div`
  background-color: #000000;
  color: #ffffff;
  font-weight: normal;
  display: flex;
  flex-wrap: nowrap;
  height: 14px;
  margin: 2px 0;
`

export default memo(BottomMenu)
