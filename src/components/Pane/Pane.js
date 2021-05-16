import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

Pane.propTypes = {
  active: PropTypes.bool,
  title: PropTypes.string.isRequired
}

function Pane({ title = 'Item' }) {
  return (
    <StyledPane>
      {title}
    </StyledPane>
  )
}

const StyledPane = styled.div`
  width: 100%;
  height: 500px; /* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< TODO: real auto-sizing */
  border: 1px solid white;
  margin: 2px;
  background-color: #0000dd;
`

// .panetable {
//   border-top: 1px dashed gray;
//   border-bottom: 1px dashed gray;
//   /*border: 5px double gray;*/
//   border-collapse: separate;
//   background-color: #0000dd;
// }
// .panetable tr {
//   background-color: #0000ff;
//   color: #ffffff;
// }
// .panetable tr.selected {
//   background-color: #00A0A0;
//   color: #000000;
// }
// .panetable td {
//   border: 2px solid transparent;
//   white-space: nowrap;
// }
// .panetable td:nth-child(1) {
//   border-left: 1px solid gray;
//   text-align: left;
//   padding-left: 4px;
//   width: 300px;
// }
// .panetable td:nth-child(2) {
//   border-left: 1px solid gray;
//   text-align: right;
//   width: 42px;
//   min-width: 42px;
//   max-width: 42px;
// }
// .panetable td:nth-child(3) {
//   border-left: 1px solid gray;
//   border-right: 1px solid gray;
//   text-align: right;
//   width: 60px;
//   min-width: 60px;
//   max-width: 60px;
// }

export default memo(Pane)
