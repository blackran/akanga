import React from 'react'
import './statics/Block.scss'

function BarRegression ({ value }) {
  if (parseInt(value) > 100) {
    return <div className="BarRegression" style={{ width: '100%' }}></div>
  }

  if (parseInt(value) < 0) {
    return <div className="BarRegression" style={{ width: '0%' }}></div>
  }

  return <div className="BarRegression" style={{ width: value + '%' }}></div>
}

function Block ({ id, title, value, onHover, active }) {
  return (
    <div
      className={ id === active ? 'Block active' : 'Block' }
      onMouseEnter={() => onHover(id)}
    >
      <h1>{ title }</h1>
      <BarRegression {...{ value }} />
    </div>
  )
}

export default Block
