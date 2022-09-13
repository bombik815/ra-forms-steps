import React from 'react'

export default function Step({id, date, range, onRemove, onEdit}) {
  return (
    <div className="step">
      <p className="step-date">{date}</p>
      <p className="step-range">{range}</p>
      <div className="step-action">
        <button className="btn-change" type="button" onClick={() => onEdit(id)}></button>
        <button className="btn-remove" type="button" onClick={() => onRemove(id)}></button>
      </div>
    </div>
  )
}
