import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

TopMenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool
}

function TopMenuItem({ title = 'Item', active = false }) {
  return (
    active ?
      <StyledActiveItem>
        {title}
      </StyledActiveItem>
    :
      <StyledItem>
        {title}
      </StyledItem>
  )
}

const StyledItem = styled.div`
  display: inline-block;
  background-color: #00A0A0;
  color: #000000;
  font-weight: normal;
  font-size: 12px;
  text-align: center;
  text-shadow: none;
  padding: 2px 8px;
  width: auto;
  margin: -1px 30px -1px 10px;
  -webkit-box-shadow: none;
          box-shadow: none;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: none;

  &::first-letter {
    color: #ffff00;
  }
`

const StyledActiveItem = styled.div`
  display: inline-block;
  background-color: #000000;
  color: #ffffff;
  font-weight: normal;
  font-size: 12px;
  text-align: center;
  text-shadow: none;
  padding: 2px 8px;
  width: auto;
  margin: -1px 30px -1px 10px;
  -webkit-box-shadow: none;
          box-shadow: none;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: none;

  &::first-letter {
    color: #ffff00;
  }
`

export default memo(TopMenuItem)
