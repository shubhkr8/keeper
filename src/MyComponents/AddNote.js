import React, { useState } from "react";

export const AddNote = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description can't be blank");
    } else {
      props.addNotes(title, desc);
    }
    setTitle("");
    setDesc("");
  };
  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          type="text"
          name="description"
          placeholder="Add a note..."
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button type="submit" value="Submit">
          Add
        </button>
      </form>
    </div>
  );
};
