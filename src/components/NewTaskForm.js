import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories}) {

  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code")

  const options = categories.map(category=>{
    return(
    <option key={category}>{category}</option>)
  })

  function handleSubmit(e){
    e.preventDefault()
    onTaskFormSubmit({text, category})

  }
  
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={e=>setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={e=>setCategory(e.target.value)}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
