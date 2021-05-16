import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

BottomMenuItem.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

function BottomMenuItem({ number = '0', title = 'Item' }) {
  return (
    <StyledItem>
      {number}
      <StyledTitle>
        {title}
      </StyledTitle>
    </StyledItem>
  )
}

const StyledItem = styled.div`
  margin-left: 3px;
  font-size: 12px;
  line-height: 12px;
  height: 12px;
`

const StyledTitle = styled.div`
  display: inline-block;
  background-color: #00A0A0;
  color: #000000;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  text-align: left;
  text-shadow: none;
  padding: 1px 2px;
  margin-left: 1px;
  width: 64px;
  min-width: 64px;
  max-width: 64px;
  -webkit-box-shadow: none;
          box-shadow: none;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: none;
`

export default memo(BottomMenuItem)
