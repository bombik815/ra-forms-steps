import React from 'react'

export default function FormSteps({onInputData, form, handleDate, handleRange}) {

  return (
    <form className="form-steps">
      <div className="input-date">
        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
        <input type="date"
          name="date"
          value={form.date}
          onChange={handleDate}
          placeholder="дд.мм.гг"/>
      </div>
      <div className="input-range">
        <label htmlFor="range">Пройдено км</label>
        <input type="number"
          name="range"
          value={form.range}
          onChange={handleRange}
          placeholder="введите число"/>
      </div>
      <button className="btn-steps" type="button" onClick={() => onInputData(form.date, form.range, form.id)}>OK</button>
    </form>
  )
}
