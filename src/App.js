import React, { useState } from "react";
import BoardSteps from "./components/BoardSteps";
import FormSteps from "./components/FormSteps";
import StepModel from "./components/StepModel";

function App() {
  const [steps, setSteps] = useState([]);
  const [form, setForm] = useState({
    date: '',
    range: ''
  });

  function handleDate(ev) {
    setForm(prevForm => ({...prevForm, date: ev.target.value}));
  }
  function handleRange(ev) {
    setForm(prevForm => ({...prevForm, range: ev.target.value}));
  }

  function handleFormData(date, range, id) {
    const step = new StepModel(date, range);
    setSteps(prevSteps => {
      let match = false;
      prevSteps.map((el) => {
        if (el.date === step.date && el.id !== id) {
          const num = +el.range + +step.range;
          match = true;
          return el.range = num
        } else if (el.date === step.date && el.id === id) {
          match = true;
          return el.range = range;
        }
        return el;
      })
      if (match) {
        return [...prevSteps];
      }
      return [...prevSteps, step];
    })
    setForm({
      date: '',
      range: ''
    });
  }

  function handleRemove(id) {
    setSteps(prevBooks => prevBooks.filter(o => o.id !== id));
  }
  function handleEdit(id) {
    steps.forEach((el) => {
      if (el.id === id) {
        setForm(prevForm => ({
          ...prevForm,
          date: el.date,
          range: el.range,
          id: el.id
        }));
      }
    });
  }

  return (
    <>
      <FormSteps onInputData={handleFormData} form={form} handleDate={handleDate} handleRange={handleRange}/>
      <BoardSteps addSteps={steps} onRemove={handleRemove} onEdit={handleEdit}/>
    </>
  );
}

export default App;
